# ---------- Stage 1: Build ----------
# Use an official Node.js runtime as a parent image.
FROM node:18-alpine AS builder

# Set the working directory in the container.
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container.00
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of your application code.
COPY . .

# Build the Next.js application.
RUN npm run build

# ---------- Stage 2: Production Image ----------
# Use a smaller Node.js image for the runtime.
FROM node:18-alpine AS runner

# Set NODE_ENV to production for optimizations.
ENV NODE_ENV=production

# Set the working directory.
WORKDIR /app

# Copy only the necessary files from the builder stage.
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies.
RUN npm install --only=production

# Expose the port on which your Next.js app will run.
EXPOSE 3000

# Define the command to run your app.
# Make sure your package.json has a script named "start" that runs "next start".
CMD ["npm", "start"]
