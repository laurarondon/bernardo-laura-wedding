# Bernardo & Laura · Wedding Website

A bilingual (Portuguese / Spanish) wedding website for Bernardo and Laura, with a manual gift list (PIX, Bizum, IBAN bank transfer). No payment processors, no monthly fees.

---

## 1. What you'll need (all free, no credit card)

- A **GitHub** account → https://github.com/signup
- A **Vercel** account → https://vercel.com/signup (sign in with the GitHub account you just made)

That's it. You don't need to install anything on your computer.

---

## 2. First-time deploy — step by step

### Step A · Put the code on GitHub

1. Go to https://github.com/new
2. Repository name: `bernardo-laura-wedding`
3. Set it to **Private**
4. Click **Create repository**
5. On the next page, click **uploading an existing file**
6. Drag the entire contents of the `bernardo-laura-wedding` folder (everything except `node_modules` if it exists) into the upload area
7. Scroll down, click **Commit changes**

### Step B · Connect to Vercel

1. Go to https://vercel.com/new
2. Find `bernardo-laura-wedding` in the list and click **Import**
3. Leave all settings as default
4. Click **Deploy**
5. Wait ~1 minute. Vercel will give you a URL like `bernardo-laura-wedding.vercel.app` — that's your live site.

You can pick a friendlier subdomain (like `bernardo-e-laura.vercel.app`) under **Settings → Domains** in Vercel.

---

## 3. How to edit the site (no coding needed)

After every save on GitHub, Vercel automatically rebuilds and updates the live site within ~1 minute.

### Edit payment info, venue, dates

1. On GitHub, open `content/settings.ts`
2. Click the pencil icon (✏️) at the top right
3. Replace the placeholders:
   - `REPLACE_WITH_LAURA_PIX_KEY` → Laura's actual PIX key
   - `REPLACE_WITH_BERNARDO_PHONE` → Bernardo's Bizum phone number
   - `venueName` and `venueAddress` once confirmed
   - `googleMapsUrl` — paste a Google Maps share link
4. Scroll down, click **Commit changes**

### Edit the gift list

1. On GitHub, open `content/gifts.ts`
2. Click the pencil icon (✏️)
3. To **add a gift**: copy any existing block (between `{` and `},`) and paste it; change the `id`, `title`, `description`, and `amount`
4. To **remove a gift**: delete its block
5. To **change a gift**: edit the text in place
6. Click **Commit changes**

> **The `id` must be unique** and use only lowercase letters, numbers, and hyphens. No spaces, no accents.

### Edit text on the home page or wedding page

Open `content/translations.ts` and edit the strings under `pt` (Portuguese) or `es` (Spanish). Same commit flow.

---

## 4. Security notes

- **For guests paying:** the site never asks them for card numbers or bank logins. They just see your PIX key / Bizum number / IBAN and pay from their own bank app — exactly as if you'd sent them a WhatsApp message with the info.
- **For you receiving:** since there's no payment processor in the middle, no third-party can hold or freeze your money. Funds arrive directly in Laura's Brazilian account (PIX) or Bernardo's Spanish account (Bizum / IBAN).
- **Confirming gifts:** you'll need to manually check your bank apps after the wedding to see who paid what. Asking guests to write the gift name in the payment message makes this easy.
- **Privacy:** the site is public on the internet. Don't put anything you wouldn't share with a guest. Your PIX key and Bizum number being visible is intentional — that's how guests pay you.

---

## 5. Custom domain (optional, ~€10/year)

If later you want `bernardoelaura.com` instead of `bernardo-e-laura.vercel.app`:

1. Buy a domain on Namecheap, Porkbun, or Cloudflare
2. In Vercel: **Settings → Domains → Add** and follow Vercel's instructions

Not required. The free Vercel subdomain works perfectly.

---

## 6. Local preview (optional, for developers)

If you ever want to run the site on your laptop to preview changes before publishing:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in a browser. Requires Node.js (https://nodejs.org). You don't need this for normal use — every change you make on GitHub auto-publishes via Vercel.

---

## 7. Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- No database, no backend, no payment processors
- Hosted on Vercel free tier
