# CI/CD to AWS App Runner (via ECR)

This is a minimal Express app packaged as a Docker container. A GitHub Actions workflow
builds the image, pushes it to Amazon ECR, and App Runner auto-deploys from ECR.

## Quick Start
1. Create an ECR repo named `ci-cd-demo` (or change `ECR_REPOSITORY`).
2. Create an App Runner service pointing to that ECR image, enable **Auto Deployments**.
3. Add GitHub secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION` (e.g., `ap-south-1`)
   - `ECR_REPOSITORY` (e.g., `ci-cd-demo`)
4. Push to `main` and watch the workflow run. When it finishes, App Runner will update.

## Local run
```bash
npm ci
npm start
# open http://localhost:3000
```
