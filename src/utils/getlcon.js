import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiVite,
  SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiGithub, TbApi, TbDeviceMobile, TbGauge, TbPlugConnected, TbBug, TbSparkles,
  TbPalette, TbRobot, TbBrandGit, TbDatabase, TbPlug,
  TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReact2,
  TbBrandNextjs, TbBrandTypescript, TbBrandNode, TbBrandTailwind,
  TbCode, TbBrandGithub,
  FiCode, FiLayout, FiBriefcase, FiGrid, FiCpu, FiZap,
  FiGithub, FiLinkedin, FiTwitter, FiStar, FiUsers, FiFolder,
  FiBookOpen, FiTrendingUp, FaWhatsapp,
} from '../utils/iconMap';

const ICONS = {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiVite,
  SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiGithub, TbApi, TbDeviceMobile, TbGauge, TbPlugConnected, TbBug, TbSparkles,
  TbPalette, TbRobot, TbBrandGit, TbDatabase, TbPlug,
  TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReact: TbBrandReact2,
  TbBrandNextjs, TbBrandTypescript, TbBrandNode, TbBrandTailwind,
  TbCode, TbBrandGithub,
  FiCode, FiLayout, FiBriefcase, FiGrid, FiCpu, FiZap,
  FiGithub, FiLinkedin, FiTwitter, FiStar, FiUsers, FiFolder,
  FiBookOpen, FiTrendingUp, FaWhatsapp,
};

export function getIcon(name) {
  return ICONS[name] ?? TbGauge;
}
