
import window from 'global/window';

export const API_PREFIX = window.CF_API_PREFIX;

export default {
  api: {
    // 首页默认module接口
    getShowIndex: `${API_PREFIX}/role/getIshomeModuleByRid.do`,
    // getShowIndex: `http://qzone-music.qq.com/fcg-bin/cgi_playlist_xml.fcg?uin=${1215525830}&json=1&g_tk=1916754934`,
    onLogin: `${API_PREFIX}/logon.do`,
  }
};
