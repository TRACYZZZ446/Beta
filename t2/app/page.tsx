import { IconCloud } from "@/components/icon-cloud";

export default function Home() {
  // 使用一些常见开发工具的图标URL
  const devIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Interactive Tech Stack
      </h1>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
        <IconCloud images={devIcons} />
      </div>
      <p className="mt-8 text-gray-600 dark:text-gray-400 text-center max-w-md">
        点击图标可以查看动画效果，或者用鼠标拖拽来旋转视图
      </p>
    </div>
  );
}
