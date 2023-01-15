import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://google.com', '_self');

  return "Opening GUI version... SIKE, WE DON'T HAVE A GUI VERSION";
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:contact@seerintelligence.com');

  return 'Opening mailto:contact@seerintelligene.com';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emac[s]'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/seerintelligence', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const urgent = async (args?: string[]): Promise<string> => {
  return `Contacted by a hacker? email us at urgent@seerintelligence.com or contact us via telegram at @TheSeerGuy`;
};

export const whoru = async (args?: string[]): Promise<string> => {
  return `We are a security company founded at 2019 by Eth and Limbo, We focus on Cyber security and personal privacy alongside the right to freedom of accesebility, We also do lots of open source stuff.`;
};

export const book = async (args?: string[]): Promise<string> => {
  return "Book our services at contact@seerintelligence.com or use the command 'email' ";
};

export const underattack = async (args?: string[]): Promise<string> => {
  return `Under attack? email us at urgent@seerintelligence.com or contact us via telegram at @TheSeerGuy`;
};

export const credits = async (args?: string[]): Promise<string> => {
  return `
The original design is created by: m4tt72, Thanks buddy :D
The original github repo is located at: https://github.com/m4tt72/terminal
`;
};
export const banner = (args?: string[]): string => {
  return `

 #####  ####### ####### ######
#     # #       #       #     #
#       #       #       #     #
 #####  #####   #####   ######
      # #       #       #   #
#     # #       #       #    #
 #####  ####### ####### #     #

Type 'help' to see list of available commands.

--
Contacted by a hacker? type 'urgent', use 'whoru' to know about us, or 'whoami' if you're having an identity crisis
--
The project is open-source 🎉 type 'repo' to enter the git repository.
Try out 'theme' and 'neofetch' :D
--
`;
};
