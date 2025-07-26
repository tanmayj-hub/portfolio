````markdown
# Cloud + AI Portfolio ⚡️ [![GPL-3.0 License](https://img.shields.io/github/license/tanmayj-hub/portfolio?color=blue)](LICENSE)

## A clean, beautiful & responsive portfolio template for developers — now pre-wired for **AWS S3 + CloudFront**!

<p align="center">
  <kbd>
    <img src="https://user-images.githubusercontent.com/53429438/106779355-e9cd9e80-666c-11eb-9417-8a4b54441bc6.gif" alt="Demo GIF"/>
  </kbd>
</p>

Just change `src/portfolio.js` to inject your content and tweak global colours in `src/_globalColor.scss`.  
Fork it, bend it, break it — it’s yours!

> **What’s special in this fork?**  
> • Hosted on **private S3 bucket → CloudFront (ACM TLS, Route 53)**  
> • **GitHub Actions** assumes an **OIDC IAM role** — no long-lived AWS keys  
> • Custom domain **`cloudwithtanmay.com`**  
> • Baseline upgraded to **Node 20 LTS / npm 10+**

---

## Table of Contents
- [Portfolio Sections](#portfolio-sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Linking portfolio to GitHub](#linking-portfolio-to-github)
- [Linking blogs section to Medium](#linking-blogs-section-to-medium)
- [Change & Customise](#change-and-customize-every-section-according-to-your-need)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Illustrations](#illustrations)
- [For the Future](#for-the-future)
- [Project Maintainers](#project-maintainers)
- [Contributors](#contributors)

---

## Portfolio Sections
✔️ Summary & About me  ✔️ Skills ✔️ Education ✔️ Work Experience  
✔️ Open-source Projects ✔️ Big Projects ✔️ Achievements & Certifications 🏆  
✔️ Blogs ✔️ Talks ✔️ Podcast ✔️ Contact me ✔️ Twitter Timeline ✔️ GitHub Profile  

**Live demo → <https://cloudwithtanmay.com>**

---

## Getting Started

You’ll need **Git**, **Node 20 LTS** (comes with **npm 10+**)

```text
node ≥ 20.x
npm  ≥ 10.x
git  ≥ 2.17

```

---

## How to Use 🛠️

```bash
# Clone your fork
git clone https://github.com/tanmayj-hub/portfolio.git
cd portfolio

# Copy env template
cp env.example .env        # Windows: copy env.example .env

# Install deps & start dev server
npm ci
npm start
```

---

## Linking portfolio to GitHub

If you deploy with **AWS OIDC CI/CD**, you can skip the classic PAT — the workflow already has a short-lived token.
Otherwise, create a classic PAT and add to `.env`:

```env
REACT_APP_GITHUB_TOKEN="YOUR_GITHUB_PAT"
GITHUB_USERNAME="YOUR_USERNAME"
USE_GITHUB_DATA="true"
```

Set `showGithubProfile` to `true | false` in `portfolio.js` to show or hide the GitHub contact card.

---

## Linking blogs section to Medium

Add your Medium user in `.env`:

```env
MEDIUM_USERNAME="your-medium-username"
```

Set `displayMediumBlogs` in `portfolio.js` as desired.

---

## Change and customize every section according to your need

Edit `/src/portfolio.js`, upload `src/containers/greeting/resume/resume.pdf`, use `emoji()` helper, replace Lottie JSONs in `src/assets/lottie`, tweak Twitter timeline (`twitterDetails`), etc.

---

## Deployment

### 🚀 **AWS S3 + CloudFront (recommended)**

| Step  | Action                                                                                                                 |
| ----- | ---------------------------------------------------------------------------------------------------------------------- |
| **1** | Create **private S3 bucket** (Block Public Access ✔; Static-site hosting **disabled**).                                |
| **2** | Create **CloudFront distribution** with the S3 bucket as origin; note *Distribution ID*.                               |
| **3** | In **us-east-1**, request an **ACM cert** for apex + `www`; attach to the distribution.                                |
| **4** | Add Route 53 **A / AAAA Alias** records pointing to CloudFront.                                                        |
| **5** | Create an **OIDC IAM role** (trusted to GitHub) with `s3:PutObject`, `s3:ListBucket`, `cloudfront:CreateInvalidation`. |
| **6** | GitHub Actions workflow:                                                                                               |

```yaml
name: Deploy to S3 + CloudFront

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::<ACCOUNT_ID>:role/portfolio-ci
          aws-region: us-east-1

      - run: npm ci
      - run: npm run build
      - run: aws s3 sync build/ s3://$S3_BUCKET --delete
      - run: aws cloudfront create-invalidation \
              --distribution-id $CF_ID --paths '/*'
```

### GitHub Pages & Netlify (still supported)

If you prefer serverless GitHub Pages or Netlify ➡ follow the original instructions below.

---

### Deploying to GitHub Pages

This section guides you to deploy your portfolio on GitHub pages.

- Navigate to `package.json` and enter your domain name instead of `https://developerfolio.js.org/` in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/developerFolio`, add the same to the homepage section of `package.json`.

- In short you can also add `/devloperFolio` to `package.json` as both are exactly same. Upon doing so, you tell `create-react-app` to add the path assets accordingly.

- Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

### Deploying to Netlify

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/saadpasta/developerFolio)

---

## Technologies Used

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)

---

## Illustrations

* [UnDraw](https://undraw.co/illustrations)
* [LottieFiles](https://lottiefiles.com)

---

## For the Future

PRs welcome! Planned enhancements: LinkedIn API integration, Gatsby migration, extra sections.

---

© 2025 Tanmay Jhunjhunwala — GPL-3.0

