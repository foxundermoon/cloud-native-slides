# cloud native slides

# 主题待补充

## Getting Started

After downloading the boilerplate, your first order of business is to open a terminal and run 
```bash
yarn
```
or 
```bash
npm install
```

Then, to start up the local server, run
```bash
yarn start
```
or
```bash
npm start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and you're ready to roll. Modify `index.mdx` to see changes, but the best part about MDX is that you can create your own React components and import them into the `index.mdx` file to seamlessly integrate with markdown!

## Build & Deployment

Building the dist version of the project is as easy as running
```bash
npm run build
```

If you want to deploy the slideshow to surge, run 
```bash
npm run deploy
```
