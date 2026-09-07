# 🍃 TalentHub Database Connection & GitHub Upload Tutorial

Follow these clear, step-by-step guides to upload your project to GitHub and connect it to a free cloud MongoDB database!

---

## 📁 Part 1: How to Upload the Project to GitHub (GitHub Pages Setup)

To show your reviewer a fully interactive website hosted on the internet for free:

### 1. Create a GitHub Repository
1. Open your browser and go to **[GitHub.com](https://github.com)**.
2. Sign in and click the green **New** button (or click the **`+`** icon at the top-right -> **New repository**).
3. Name your repository (for example: `talenthub`).
4. Keep it **Public** (so pages hosting is free).
5. ⚠️ **CRITICAL STEP**: Check the box that says **Add a README file** (this enables drag-and-drop immediately).
6. Click **Create repository**.

### 2. Upload Your Project Files
1. On your new repository page, click the **Add file** button (top-right of the file list) and choose **Upload files**.
2. Open Windows File Explorer on your computer and go to your project folder:
   `C:\Users\nikhi\.gemini\antigravity-ide\scratch\talenthub`
3. Select and drag **these specific items** from File Explorer into the browser upload box:
   - 📁 **`docs`** (Drag the **entire folder**! It contains `index.html`, `style.css`, `app.js`, and `assets/`).
   - 📄 **`server.js`**
   - 📄 **`database.js`**
   - 📄 **`package.json`**
   *(Note: NEVER drag or upload the `node_modules` folder. It is too heavy and will crash your upload).*
4. Wait about 10 seconds for the progress bar to finish.
5. Click the green **Commit changes** button at the bottom.

### 3. Turn on Free Website Hosting (GitHub Pages)
1. In your GitHub repository tab, click on the **Settings** icon at the top menu.
2. In the left-side menu, scroll down and click **Pages**.
3. Under **Build and deployment**:
   - **Branch**: Click the dropdown (currently saying `None`) and select **`main`**.
   - **Folder**: Next to it, click the second dropdown and select **`/docs`** (this tells GitHub to host your clean frontend folder).
4. Click the **Save** button.
5. Wait 60 seconds, refresh the page, and GitHub will display your hosted live link at the top of the Pages section!
   👉 **`https://your-username.github.io/talenthub/`**

---

## 🍃 Part 2: How to Connect to a Free Cloud MongoDB Atlas Database

To connect your website to a live database running on the cloud (so that logins and postings save securely in MongoDB live):

### 1. Sign up for a Free Cluster
1. Open your browser and go to **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**.
2. Sign up for a free account.
3. When asked to choose a plan, select the **FREE (M0)** cluster option.
4. Click **Create**.

### 2. Configure Database Access (Create Credentials)
1. In your Atlas dashboard, click **Database Access** on the left menu.
2. Click **Add New Database User**.
3. Create a username (e.g. `db_user`) and click **Autogenerate Secure Password**.
4. **Copy the password and save it in a safe place** (you will need it in your connection string!).
5. Click **Add User**.

### 3. Configure Network Access (Allow Access from Anywhere)
1. Click **Network Access** on the left menu.
2. Click **Add IP Address**.
3. Click the button that says **Allow Access From Anywhere** (this adds `0.0.0.0/0` so your local computer and your Render hosting can connect to the database).
4. Click **Confirm**.

### 4. Copy Your Connection String
1. Click **Database** on the left menu to return to your clusters overview.
2. Click the **Connect** button on your cluster card.
3. Choose **Drivers** (or Node.js driver).
4. Copy the connection string provided. It will look like this:
   `mongodb+srv://db_user:<password>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

### 5. Paste the String in Your Project
1. Open your code editor or File Explorer on your computer and navigate to:
   `C:\Users\nikhi\.gemini\antigravity-ide\scratch\talenthub`
2. Create a new file in that folder named **`.env`** (make sure it's exactly `.env` with a dot at the beginning).
3. Open the `.env` file in Notepad or your editor, and paste your connection string like this:
   ```env
   MONGODB_URI=mongodb+srv://db_user:YOUR_SECRET_PASSWORD@cluster0.xxxx.mongodb.net/talenthub?retryWrites=true&w=majority
   ```
   *(Be sure to replace `<password>` or `YOUR_SECRET_PASSWORD` with the secure password you copied in Step 2!)*
4. Save the `.env` file.

**That's it!** The moment you save the `.env` file, the server running in the background will read it and immediately connect to MongoDB Atlas. Your navbar badge will instantly change to a glowing green **`MongoDB Active`**!
