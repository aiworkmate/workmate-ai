globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HTTPError, d as defineLazyEventHandler, a as H3Core } from "./_libs/h3.mjs";
import { H as HookableCore } from "./_libs/hookable.mjs";

import { a as FastResponse } from "./_libs/srvx.mjs";


import "./_libs/rou3.mjs";





function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/assets/activity-DamcdOgQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f6-q0Dsj41Gto4yxu8/bRfuxNATP70"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 246,
    "path": "../public/assets/activity-DamcdOgQ.js"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"10570-ex8O68E69M+pfZKPNn0D+kaw/kU"',
    "mtime": "2026-06-03T11:10:34.456Z",
    "size": 66928,
    "path": "../public/favicon.ico"
  },
  "/assets/admin-C2y6_BwS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"26e6-r4To9mGFZcAMRtm4wksPMwJl8FU"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 9958,
    "path": "../public/assets/admin-C2y6_BwS.js"
  },
  "/assets/analytics-DrQuF-A1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"209a-l+He83o3R5kGVrICRnh1452Utu0"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 8346,
    "path": "../public/assets/analytics-DrQuF-A1.js"
  },
  "/assets/app-CMdYuM5c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"185de-pFZtjKB59ikST1fCeHyq9cN4gdU"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 99806,
    "path": "../public/assets/app-CMdYuM5c.js"
  },
  "/assets/archive-jUKIYX2k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"109-qWvm5t0OJ8yahX5onNIUfhIyqa8"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 265,
    "path": "../public/assets/archive-jUKIYX2k.js"
  },
  "/assets/arrow-up-right-D--7jTSa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b3-yNeqa7FW8ttmqXHnEQifYb/qYCM"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 179,
    "path": "../public/assets/arrow-up-right-D--7jTSa.js"
  },
  "/assets/arrow-right-aB9zIpef.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1-r8FcrXt9CMe01t8viuRE43WPZ8U"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 177,
    "path": "../public/assets/arrow-right-aB9zIpef.js"
  },
  "/assets/audit-BmyIm6OG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1835-ZkSLpg+4/MfCijoXpaNKaYnOngM"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 6197,
    "path": "../public/assets/audit-BmyIm6OG.js"
  },
  "/assets/auth-middleware-DpiSjn3W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10da-upYKUflWFsAyD2VidnPvkeWaUrQ"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 4314,
    "path": "../public/assets/auth-middleware-DpiSjn3W.js"
  },
  "/assets/brain-DLVyhmQI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"24d-u6w78+iL2u+YHs5g3aj9gY2QJ7k"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 589,
    "path": "../public/assets/brain-DLVyhmQI.js"
  },
  "/assets/circle-check-CT7yD47p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b9-GeKcwcS/wJ6VgLpwINtF3pKsdcA"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 185,
    "path": "../public/assets/circle-check-CT7yD47p.js"
  },
  "/assets/circle-sSuMFKrL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"89-lkHY1O/ORiyF6YdhehTxfun+K6Q"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 137,
    "path": "../public/assets/circle-sSuMFKrL.js"
  },
  "/assets/createLucideIcon-9oojAnGN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b9-qJuElaah+fKEgO6RPwqvAYWYYV8"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 1209,
    "path": "../public/assets/createLucideIcon-9oojAnGN.js"
  },
  "/assets/empty-states-B1cPuMV2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"541-o8Y9fbkJhFb5+Y/WyDDBncTTjkE"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 1345,
    "path": "../public/assets/empty-states-B1cPuMV2.js"
  },
  "/assets/endpoints-BW9ARn-R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b51-ifMKN0Ho4hvJpUyucxZ1ZiRYQXE"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 2897,
    "path": "../public/assets/endpoints-BW9ARn-R.js"
  },
  "/assets/file-text-IaNekwea.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18d-mkKYbNmcE8gAm3NCv/5/9/R9dUg"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 397,
    "path": "../public/assets/file-text-IaNekwea.js"
  },
  "/assets/folder-kanban-DViH-2A3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"169-pwE4RatczL9Amp3zJEF6n2uuNK4"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 361,
    "path": "../public/assets/folder-kanban-DViH-2A3.js"
  },
  "/assets/globe-BKW0nZb5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f9-oKVm79+GQFNBup94+WxIZ89I10M"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 249,
    "path": "../public/assets/globe-BKW0nZb5.js"
  },
  "/assets/health-bg5iYaDD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a64-CUk7LCUcWU1ASES5H5lqcfhj5jw"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 2660,
    "path": "../public/assets/health-bg5iYaDD.js"
  },
  "/assets/index-BASRKadV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1814-3YOqdijebtkPx0pafKDEYuT4GPM"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 6164,
    "path": "../public/assets/index-BASRKadV.js"
  },
  "/assets/index-DInjG_M6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2105-Ue1/2c5Yaae52RU2AhlCOG2VLsc"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 8453,
    "path": "../public/assets/index-DInjG_M6.js"
  },
  "/assets/agents-CD8QmSG4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8d023-uy3ajh3FvOiBqdfRD9ZOsGIVpCU"',
    "mtime": "2026-06-03T11:10:32.940Z",
    "size": 577571,
    "path": "../public/assets/agents-CD8QmSG4.js"
  },
  "/assets/chat-D5HH9ucs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c85ed-oqHh6/hGyKQS6SDJCuC6rc5yP6A"',
    "mtime": "2026-06-03T11:10:32.940Z",
    "size": 820717,
    "path": "../public/assets/chat-D5HH9ucs.js"
  },
  "/assets/index-DsewWUT5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"93cfe-36TWxTyn0Z9U3M4+tTtK/xJgRoM"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 605438,
    "path": "../public/assets/index-DsewWUT5.js"
  },
  "/assets/index-iz11y7hF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6fb5-d5ycal7El1Wte5V6mUAI4aX8ows"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 28597,
    "path": "../public/assets/index-iz11y7hF.js"
  },
  "/assets/loader-circle-DkIoonnj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"97-gS12v3ywzVoL6fid8hwbKWC814w"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 151,
    "path": "../public/assets/loader-circle-DkIoonnj.js"
  },
  "/assets/login-BDt3Zena.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"70-dhTXjB0Cg2yZahcNGbxpWlsITtI"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 112,
    "path": "../public/assets/login-BDt3Zena.js"
  },
  "/assets/mail-BTIG6QO-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4f8-hU7xpqrIxn63u+5ADbxjO+BM6V0"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 1272,
    "path": "../public/assets/mail-BTIG6QO-.js"
  },
  "/assets/medical-DKZJXQPR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1439-5HHjRzHYVHfxQVwpnnujAAvGV7s"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 5177,
    "path": "../public/assets/medical-DKZJXQPR.js"
  },
  "/assets/memory-fLaGtzfW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a00-iV1ayWh2fMSTliYligQs4mbiZtY"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 6656,
    "path": "../public/assets/memory-fLaGtzfW.js"
  },
  "/assets/menu-Bf96dRfR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"115-G9s+Zo+v+omdalI1un5B6w14B2g"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 277,
    "path": "../public/assets/menu-Bf96dRfR.js"
  },
  "/assets/message-square-DzOSAF3E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f5-ro+s0BuMxGUSSeJFwX3bAnfdc5M"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 245,
    "path": "../public/assets/message-square-DzOSAF3E.js"
  },
  "/assets/page-primitives-DdfzNcVn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"736-yNBIeOuNcyGk4oSrQgR800MJXbQ"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 1846,
    "path": "../public/assets/page-primitives-DdfzNcVn.js"
  },
  "/assets/pin-BlwNJ6v1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"166-JxKHqTvl56fRWTsdtEm9wAFh0nI"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 358,
    "path": "../public/assets/pin-BlwNJ6v1.js"
  },
  "/assets/play-Cy-37A95.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d-dV1/dYYLSiH3YKi5vA3jI/I4NiU"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 365,
    "path": "../public/assets/play-Cy-37A95.js"
  },
  "/assets/plug-B2_DUr6g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12a-LlNHXAmg0yPENIRp4RZbZB2w3cE"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 298,
    "path": "../public/assets/plug-B2_DUr6g.js"
  },
  "/assets/plus-pDe0j-BV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a5-pCpldhaqYgKMpObA4WOv4nxWJi8"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 165,
    "path": "../public/assets/plus-pDe0j-BV.js"
  },
  "/assets/projects-KONhSJen.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11cc-vRz6yg3VAb4u4KCZR9O76RrfRGk"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 4556,
    "path": "../public/assets/projects-KONhSJen.js"
  },
  "/assets/projects._id-BM-SOWuE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3390-BUl7EfJ/U38YT2okmQpDTh0ib98"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 13200,
    "path": "../public/assets/projects._id-BM-SOWuE.js"
  },
  "/assets/rotate-cw-yg-3dao_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d5-8qYlZ7DyO56xglNp9wrYCf7ctN8"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 213,
    "path": "../public/assets/rotate-cw-yg-3dao_.js"
  },
  "/assets/settings-BsB9zjmm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1508-ftpnQmtyionyS/BRnB1R6yVs11w"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 5384,
    "path": "../public/assets/settings-BsB9zjmm.js"
  },
  "/assets/search-BaJnjgka.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b5-7HEtaPHPAeDU66nCNS0movf5KVI"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 181,
    "path": "../public/assets/search-BaJnjgka.js"
  },
  "/assets/shield-Bpa8RlLL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"117-Y1qNHek3qNE+54Jxh1rPqU87SU0"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 279,
    "path": "../public/assets/shield-Bpa8RlLL.js"
  },
  "/assets/shield-check-XlmW-Yvb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"147-VhyAAHS04d32gsgpGXp0hS3juXc"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 327,
    "path": "../public/assets/shield-check-XlmW-Yvb.js"
  },
  "/assets/shield-question-mark-D8QLXm_z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"406-u/0kvlibH6TbWsDgx9t4tyNhkXg"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 1030,
    "path": "../public/assets/shield-question-mark-D8QLXm_z.js"
  },
  "/assets/signup-BDt3Zena.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"70-dhTXjB0Cg2yZahcNGbxpWlsITtI"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 112,
    "path": "../public/assets/signup-BDt3Zena.js"
  },
  "/assets/sliders-horizontal-DGnKS2rI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"84a-MH1hhztuiNxeXYytxcHhm5qIlXQ"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 2122,
    "path": "../public/assets/sliders-horizontal-DGnKS2rI.js"
  },
  "/assets/sources-lVoc7E8_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b74-bQNf1grxsmUxjt+KwLVlvi+jE98"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 2932,
    "path": "../public/assets/sources-lVoc7E8_.js"
  },
  "/assets/sparkles-vpjkYr8H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fa-OtovJhGM2AReK+2BegeLqmbyCxg"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 506,
    "path": "../public/assets/sparkles-vpjkYr8H.js"
  },
  "/assets/stethoscope-ClcC_WDX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"162-kEeFtynHo02d9981Q0TQgwHxYMw"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 354,
    "path": "../public/assets/stethoscope-ClcC_WDX.js"
  },
  "/assets/target-CqPKdg3i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"521-VkET4n9MDuGpcQ74ejs+GhPl31g"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 1313,
    "path": "../public/assets/target-CqPKdg3i.js"
  },
  "/assets/styles-AD_qnTXv.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"1a7c7-ccxePO8pgRBwQNOrpYhCeGlCyRI"',
    "mtime": "2026-06-03T11:10:32.932Z",
    "size": 108487,
    "path": "../public/assets/styles-AD_qnTXv.css"
  },
  "/assets/tenant-BB-NtZle.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f0-FUbjMOEkwQPTkzYGNRMKpTzYa5A"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 1520,
    "path": "../public/assets/tenant-BB-NtZle.js"
  },
  "/assets/terminal-DqO0ZPZ7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3ad-DLR6lzmcCRZ3sLC3SprpChIKw4E"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 941,
    "path": "../public/assets/terminal-DqO0ZPZ7.js"
  },
  "/assets/tools-PgZQTKH2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"df4-nf+/4nwMHH9VyUmLfBqXGcv7sks"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 3572,
    "path": "../public/assets/tools-PgZQTKH2.js"
  },
  "/assets/timer-CQZk_CL2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fa-kzpx0kzLfzI+myirEzCVA8pNLuc"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 250,
    "path": "../public/assets/timer-CQZk_CL2.js"
  },
  "/assets/trash-2-VgEGuS1B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"154-IOyvVcpaJlB0O1beqIj2n2b2bUY"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 340,
    "path": "../public/assets/trash-2-VgEGuS1B.js"
  },
  "/assets/triangle-alert-RAKBL20R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"115-aTO+LuIub1PZ1GFneBVCxhLpurI"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 277,
    "path": "../public/assets/triangle-alert-RAKBL20R.js"
  },
  "/assets/trust-badges-Cr50io_p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b36-VI1HbuTC4HR3O6QzFeUWWio2BEM"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 2870,
    "path": "../public/assets/trust-badges-Cr50io_p.js"
  },
  "/assets/uploads-DD3RwbmW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13da-wDqljotTl5BB9VXkPZrAiqqLnPo"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 5082,
    "path": "../public/assets/uploads-DD3RwbmW.js"
  },
  "/assets/upload-D2okftgX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f2-MRPDo1bMQ5lKOaW+b238M8zRdlQ"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 242,
    "path": "../public/assets/upload-D2okftgX.js"
  },
  "/assets/useQuery-YXJamV20.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"227b-ehmR2lAyhDVpJuxvmKhJ9VKNJRM"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 8827,
    "path": "../public/assets/useQuery-YXJamV20.js"
  },
  "/assets/user-D-A-XAdx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dfc-kU6o7asPDVhhmndEEOEfexNXOFk"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 3580,
    "path": "../public/assets/user-D-A-XAdx.js"
  },
  "/assets/user-check-Dlny209o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"247-iCg/x9vRB3/PpQ9bc/CZmmkEsyQ"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 583,
    "path": "../public/assets/user-check-Dlny209o.js"
  },
  "/assets/verification-ClrtxfLT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6ed-IaSsQzRiHEAO+hqBMj6XgPBITbY"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 1773,
    "path": "../public/assets/verification-ClrtxfLT.js"
  },
  "/assets/workflow-nTpinTJv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"115-S0OuvMWNH7wFOoLrZpSsx5J1Je0"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 277,
    "path": "../public/assets/workflow-nTpinTJv.js"
  },
  "/assets/workflows-BEAV0e2v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"eee-hE2GWQktZu+dISBldatLcrPkwnQ"',
    "mtime": "2026-06-03T11:10:32.938Z",
    "size": 3822,
    "path": "../public/assets/workflows-BEAV0e2v.js"
  },
  "/assets/wrench-CaMoyAEx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b6d-H29XuonzzqPb7HYIERq0G0M/I00"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 2925,
    "path": "../public/assets/wrench-CaMoyAEx.js"
  },
  "/assets/workflows._id-DpLIDc4-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16bd-MyjTlXnKoFu9KQayRTZdIWHALrI"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 5821,
    "path": "../public/assets/workflows._id-DpLIDc4-.js"
  },
  "/assets/x-CF_QS3o6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-9LAFNtKBq3oHNrWrIsTgsqF7Q70"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 166,
    "path": "../public/assets/x-CF_QS3o6.js"
  },
  "/assets/zap-CZYfEc5U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ca-KlHSXmnuXRaVatZWdahPa2ktNj4"',
    "mtime": "2026-06-03T11:10:32.939Z",
    "size": 458,
    "path": "../public/assets/zap-CZYfEc5U.js"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_AeEqSe = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_AeEqSe };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};
