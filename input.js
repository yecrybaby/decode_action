/****************************

#!name = 酷我音乐 & 酷我畅听
#!desc = 〔 酷我音乐&酷我畅听 〕全功能破解
#!author = 影子[https://www.napi.ltd]
#!homepage = https://napi.ltd
#!openUrl = https://napi.ltd
#!tag = 酷我音乐,酷我畅听
#!loon_version = 3.2.3(762)
#!icon = https://static.napi.ltd/Image/KuWo.png
#!date = 2025-04-13


[Argument]
QS = select,"Hi-Res音质","无损音质","超品音质","高品音质",tag=音质选择

[Rule]
USER-AGENT,KWPlayer*,PROXY
DOMAIN-SUFFIX,kuwo.cn,PROXY

[Rewrite]
^.*?(ad(.*)?\.tencentmusic\.com|kuwo\.cn\/((EcomResource|(Mobile)?Ad)Serv(er|ice)|(vip|(open)?api)?\/v\d\/(user\/freeMode|album\/adBar|app\/(newMenuList\/menuListInfo|pasterAdvert\/config)|api\/advert\/(iListen|album)|operate\/pop\/info|-online\/sign\/new\/playEntryV1-)|kuwopay\/vip-tab\/page\/floatbox|commercia/eproxy/boot/recommend/fee/config)) reject-200

[Script]
http-response ^(?!.*img).*?(abt-kuwo\.tencentmusic\.com|kuwo\.cn)(/vip|/(open)?api)?(/enc.*?signver|/(v\d/)?(pay/app/getConfigInfo|user/vip\?vers|app/startup/config|theme\?op=gd|api/((pay/)?(user/info|payInfo/kwplayer/payMiniBar)|advert/myPage)|tingshu/index/radio|operate/homePage|sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|recommend/(daily/main|songlist/getRecSonglist))|/kuwo/ui/info$|/kuwopay\/personal\/cells|/pay/viptab/index\.html|/kuwopay/vip-tab/(setting|page/cells)|/a\.p($|\?newver\=\d$|.*?op\=(getvip|policy_shortvideo)|.*?ptype\=vip)|/commercia/vip/(player/getStyleListByModel|hanger/wear)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=\d$|/basedata\.s|/mgxh\.s\?user) script-path=https://napi.ltd/script/Worker/KuWo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png, argument=[{QS}]

[Mitm]
hostname = *.kuwo.cn, *.tencentmusic.com

****************************/






































































const KuWoLa=['YDvDsMOxVQ==','w5JdO8OMw7XDjmXCiwl9w4LCkcOtwrrCig==','w43DnsKz','woTCgcOHw67Cm8K/','cALDmx9UwokBw6wdEHXDr8KEKMOY','wpbDu8OjwqTDjQ==','eMOie8K2wp8=','wrXDqGN4cw==','J30cw7JJ','5o6D5p6w5L2N5oOh','T+eavOaPoeadveS9k+aAl3zlj7PlsIHlhJXmrK3oj6rljqTkv6DnmrA=','IUfCmMKfwp4=','TTXCiQ==','Tz7CmcOswqnDu8K4','QMO/ejfCuMKGWQrDvzMuwq3Dr8OZwrg=','e10qJsKU','cMKkF8K7VcOZw7fDjT/CoD9Iw4fDpcKB','w5PChxPCqMO4QsKrP1ZxwqAM','552J5bmQ5ZKz','w7PDtcOsNW/DssOE','WcKlCsKsw58=','Ln7Ctm3CjMKgAcKCJ0wyNcOfw7oe','JMOdwrzCsMOk','wr7DpMK2w61C','NkDCqsKCwoI=','XsKNI8Kww5c=','RG4xKsKpwqY=','w7TDmG4qUw==','bBnCucOuwrk=','woLDpyrDvQ==','woPDsDU=','wrnDnMKow4ZX','w7XDksKXcg==','ecKowp7DoDLCh8KUw7tRY8K+DGXDrnM=','w5g2JDcXw6fDlMO2wptTXMK8QMKMTg==','XybCgifDgsOtQcOcdDkyaMOVwpVH','wqtzWcOrw6k=','dGoqPsK0','CsOqFhohSBDDksKew5zDsjnCtsKpwrQ=','f8O7esKEwro=','wqJvSsOew4c=','WhXDlsOMaQ==','LATDkEc=','w7JSwpLDgSrDrm3CnA==','WcO0Hg0vVBfDpcOWw5zDvTfCssKiwr0=','wrDDjcOxwofDtw==','wrZmVw==','RcK9w43Dl8K6','w7YoQALCgw==','WcKxGTwvVA0=','CcOXwo0jBMKtwqNbBMOvLg==','wpIgOAIQw63DmQ==','woDDqynDncOwdBjDhQ==','Sygnw6Bb','SRg8w5RNOw==','cGjCqnrCg8Kr','FcK0CnvDhw==','LyXDtzHDnMK8AMKNOgchM8OOwrgj','XMK+eSNXwpPDv3VwwoXCgWwvw7Bj','ccO4XsOn','w5QrYRXCjA==','PcKWw5/Ci1w=','wpTCsXhXaA==','wqRqRw==','wo4Wfnc=','wqvDsk1r','LkrCl8KRwoRP','w5vCgD3CskXDoMKpw6VDEWHCgQ==','w4Zqw4bDhgk1KcO8QBXCpA==','wpHDgMONwo7Dsw==','w6rDncK9SX0=','w5bDlsKzwqrDpcKpwpok','w7MQwpDDiirDi1PDnnZRw4Jsw5x9w7Q=','wp0xOCYKwrrCk8K4wppITsOiW8OXTQ==','FRPCncOmO8ORw5zCvw==','SEMyw5gHPEHDh8K4w63CkzPDrsKcNw==','NsKCwpPDojI=','I8KlCw==','JisIXBo=','w7zDksKjw67DvsKFw5lzFF7CtcKmwpIRWA==','QgM1w6JBJFQ=','wroUFQUO','woTCmiJqw63Cpis=','5ous55u95LyJ5ZGK','CUoGU8OxEBfDskTDt2g4','PwsJ','w7rDik5/Yg==','w5TCgwbCv8KmF8OGeUx5wqkbw5jDkMKb','wpfDh8KRw44=','w6jDiVF5c2A=','wqNmV8OIw5ANwoNVwp/Ch8O5w7tQwqZU','w7TDtGNuwqPDkMO5SmbCvnfDiU0hwo8=','w5Nsw5jDmDg/LMO2Rh8=','w6QZTCzCrgk=','Tl/CiG7CtQ==','wpwJUUhS','w7HDvMO9IEfDv8OHFw==','w4zCjRU=','w4rDgsKzaQ==','w4PDj8KIw5NEQ8OYwqrCgcOUw6BLwrZdw6Y=','w4wMwpHDqTo=','RQI+w51kIELDn8KWw6g=','wpDDscK8w5NM','Z2zCqm0=','w4TDiHRzwrHCrTrDjcOYRX7DgcKJSsKf','w6jDlWooQ8Kn','w5HDgEhDWg==','w4dqw4zDjA==','w5PDl8Ka','wofDrWDDgsOpwpUmKU3DnmABRRPChw==','w6jDvMOOwqnDl1kLNTtzwpV8w7lhVg==','ImICw7s=','O8KiFFzDscK6wqADwro=','csOmRQ/CpsODw7lSw6QJE8KEwpYI','w7vDgURi','KMKJw7zCk1c=','U2JrEMK4wrAuw4QawrQDZELDscOG','NMOawpwOKMKa','UH88EMKpw7plw74dwqUbbFjDo8Ko','wrbCuCR8RcKvI3vDr08=','TRXDocOd','w6jDhMKyb14=','w7QTfDfCuA==','w4dYJMO8w6nDnG3Cigk=','w5DCgwDCu8O2WQ==','Y8OwWsOSGsOKw7PDmw==','djoDw4Zx','XcOPR8K+wqwEBsOnw68=','L34Fw7xZwpcZPRtkwoHCpsKCLMKZ','wqbDqsOfwqvDv1s=','IwsYaQjCkh7Cs8OUw77DmEPDji8=','wqV2UcOYw5FMwpFKwo/CksOiw6oUw7kS','JCzCmsO7Gg==','w4bDh8KLw4TCv8KqwoYYXBDCjcKTw5siFA==','w6PDmMKAfw==','SwQiw4I=','Rh4iw59PJw==','CAHDlnos','M8OEwqnCkg==','w4LDgMKUwrk=','w6U4wo/DgRQ=','w4XCnBnCpUPDqQ==','b8KSw5jDrw==','wo7DqmfDm8O9w4E=','JGIIw6c=','wpQwKD8W','w4nDrW3DgsO/wpJqaVfChmgWHgLCkw==','HcKeC1HDmA==','wp/DoTbDp8OSZBjDkMOHAno=','woLDksKLw6Rz','XsK6BA0=','Gjh1UcKqw6xjw7RDw6EVNRfDs8K3','w6YkRAXChg==','wpsfcMOyD8KyOcK9w5PCusK8w5TCg8KjJQ==','AMOTwo4UE8K3wqdmA8OmLw==','wqNmU8ORw4MAw4Y=','LUfCi8KgwpY=','wp8QdnZFJnM4','OcK4wpXDoyc=','w6QYwoXDiD/Dm20=','McOEAMKv','TmUGKMKp','QsKnCAsHSAXDicOyw5jDvDnCtw==','w4LDgcOZDVQ=','KMOUwq0tBQ==','wpIMccOpQcOgZcOqwpPDt8KqwoTCkMKnOQ==','TMKJE8KDw709','G8OMQ8OQwqM=','XcOLU8KHwqxbEsO4w7A=','wqA3IA==','NSAyRAYtLcK6EsOmw6lQwrTCiMKb','w5fCiMKU','w6PDv8O4IA==','w57CjRnCo1HCv8OQwqNdMn7CkMKuDcKr','B8OTwrQEIw==','W8KYEsKJw6EzwqvDgWt1w6w=','LzE2WBR0Zw==','w6LDv8OxKWfDvcOE','IMK+F3zDscKcwqA=','wp5TNcKh','w6XDlsKQZw==','WMOeV8Knw7cGXMO4w6zChMOiw4/DsMOcOQ==','M38A','5p226I2R5Y255YuX5o6t5p+I5L245oGp','wrDCnSFNw74=','esKrDcKzw6E=','e8ONZhnChw==','RMK1CDUX','wpIJdnxUPXMLBsKWBQ==','K18Pw5Ze','wrfDoMOPwqQ=','6LWj5omQ5p6V5o6h5pyl','Q8KVHho2','woLDmMKTw4UBVcKDwqXCgsOUwrNLwqwKwrA=','w5nDrHJzwrXChMKiFkzDslXDlVx8wpc=','w4PCiwE=','w6/DpWNowrHChg==','5b+l5Yq06LWL5oukAg==','w6XDscOoOA==','w4LCjCPCp2U=','QemdquinquabkuaXj8OcY8O/wpvorbnmmYnmloHkv5rnm5Loh7U=','wovDimDDi8O2w4ohYhDDnmkNGS3Cig==','JhkM','wrrDv8OCwrk=','wqDCrnBmRMK9','PjsoVxRj','NgTCv8OcHQ==','wq/Dr0pv','wpvDsGDDnsO/','OTUyVQ==','woEqHyIL','YcOaQsOjEcOEw7fDkDHDqnoWwp3CscOT','w6XDv8OyPA==','W8OyfTzCqcOO','Jw8FQQvClA==','KcK2SMOpFsOWwqA=','VE/Cpm7Cmg==','OBvCusOyPg==','eVzCtFbCjQ==','w4JUIMOPw7DDgA==','bcKBw4nDqw==','w4Fgw4rDgA==','wp5dL8Kl','w6TDvsOoFWfDosOVHQYGwrjDmjPCvnQ=','wrjDocOowonDuw==','SsKPDQ==','AwnDrcOZdQLDrmERWAjCg8OywooD','wpNcIsKsT8Onb8O3','wrFUw47DjTjCkG3Cgk4Hw45kwoB5wrs=','BsOZwpIcLcK3wqRmK8Ot','VcO4Zy/CssOLPRfDuyMfw6XCrQ==','CMOFwphXCMK4w792BcOqNAh5w5nCmA==','csK2w7nDn8KX','Jk7CjcKX','WsKtThRW','Swwyw65R','KQUPXw==','C1kdXw==','GxwAZw4=','w5bCksKdw54=','w6MgwprDswQuMsO4ThPDuw8dwqA4','wrlFasOvw6w=','IwUGQyvCkz4=','wqHDvMKWwrnDsVQKPSxrwoA+wrYsCw==','AcKtwpHDrR7CsQ==','QFrDtsOMehfDskMQEwrCmMOrw4oQ','LU3Ck8KTwpNT','w7PDpEgVcw==','McKoCMK8UMKN','TBXDocOB','w5rCkB7Cpw==','aF/Ct8O+YgzDqGcCH0TDg8Olw5MP','w5MTQSQ=','woxmLsKBcw==','T24rG8K4wrw=','WMKjfic=','OcKVwofDpBA=','DhjCisO/PMObwpnCpcOfJykKf2jDoQ==','w7DDg093ZHs=','w4nDkcKnwpvDpMKNwpAnLcKJ','w712MsOhw7I=','NUkNc8OW','CMOTwpMQFcK2','wrTDv8ObwrHDpw==','wrViV8Oc','w6TCrwJyX8Ohwqpgw6zDlcOIIFsUJA==','w77CnwzCu1A=','NMK4CF4=','EBTCjcO+','wpRVAsKHSA==','M8Kuwp/DvwHCnMKS','Kz02WTRidsO6O8Ouw75iwr3ChMOE','w7/DnWgFZQ==','wqUzJxcI','I8OQwq/ClsOydsK2aEx6U3TDmyXDqQ==','wp8WZ2Z5JEk+AcK6FMOVw4M=','MVvCgMKawpUJMCAPwqxnOmwHMQ==','wr/Cs3F7','PcKBw6LDocOew4fDpsKGw4jDtA==','bsKdw5jDgsK2wpVrw4J0AsOUw5DCr8Kpfw==','woLltIjmjbDmn7PDlOemheS+jeeVs+aEveW+nu+/rw==','wqVmUMOJ','IsK+ClA=','5oyI5py/6Iec772Z','w63DksKKYVrCtw==','b8KWw5/DrcKtwo9vw5NzCMOI','VsO2U8OSPg==','wp/Dh8KY','L8KuHkzCv8K+woNIwrFVBMO+w64Cwoc=','wr5yWsOEw5Y=','wp3Cihtzw5o=','w6JmJcOAw5o=','w5Ngw5o=','wqBZN8KHVQ==','woPDtmPDuMOZ','wpXCrANkw4k=','QRjDr8OdeBE=','KcO1wpIZFcK7wrlmJsOmIAF5w5PDiw==','KjkLWyA=','JcO+XcO+A8Ofw7LDkGLCpGRMw5fCqsKe','IAnDm30Pw5xV','w7MJTQDCpQLDkMObE8OMwp3DqwE=','wpXClztqw6g=','HsOTwpbCo8OM','KScHUDd2cMOcBcOpw6hhw7w=','aQw8w5MAblLDhMK5w7jClnXDsMKQJg==','wpfDicKLw4o=','5L2L5ZKZ56W/5Yq9','wrpxaMO/w5Q=','wpUNZ2I=','woTCuRdLw64=','w7LDhWw=','w55BMcOLw7DDmG3ClwIyw43CocOyw7DCng==','wrDDocOIwrLDulI=','SsKKDsOMw6Ypwr7Dhz8=','Yhsfw65u','OU8mU8OZ','wpHDh8Kbw5I=','wrHDoMOFwrg=','wpbDhHBIdA==','wozDtnnDgsOzw4Ns','w5B2w43DhzQpOsOweBvCtFoW','wpvDm8Kswp3DqcK0wpo5GMODwqogACgN','wpEICi80','wr3CnDdsw5o=','EzDDqUYe','w5PDnMKrwpvDscK8','OcKSw6bCiUPDpA==','wp4Ren5y','woUBZMKJw7rDimjCmQ8=','w6LDn8KFdG3CsCHDgz7Dhw==','w6EJSyrCpQ==','VBgFw6xG','w7rDhEpAYw==','ezEqURhybMOhGMKhw6tSwqDChsOC','OMKHw5vChg==','YMOuRcKoEcOBwrHDmDPDrWAZwoHCqMOO','PjwvWBE=','wpRofWRMwrHCj8Kuw4FEC8O4HsODSg==','w6/Dk8KLcQDCuCDDkjzDnBbDnydzUw==','wq3CnxN7f3TCog==','wpZHOcK1SMO6Q8Onwo/DrQ==','wp8WfHk=','wqdQB2rDt1LDjcObEsKwwoDDtAfChcKJ','w6fCm8KCw7PCkQ==','w640ZzDCmg==','MGQcw4pRwpw=','TTfCmMOK','77is4oC377mK4oGA77uD4oOo77iO4oKr77mh4oOp77m44oCx77iu4oOi77qA','wofDkcKPw44=','XMOOWcO8HA==','wqbDjmfDiMO0','5b6l5YuP6LW/5oq+wrg=','KhobSgY=','FQ7Cv8O4PMOUw4A=','w4gcdyQkcSw5AMKMFMKXwo7CjwM=','OMKcw6DCu8O1w5g=','NcKgwoTDtQ==','w4vDtcOFGn4=','wqnClxIpIyrDs8Ktw4ppw7bCknjDrQc=','5b6C5YmO6LSF5oqKwoI=','MMKxwoDDuC4=','w6jDvsOoPHzDp8OAFCEHw7fCgWDCm0k=','w7ISwpvDgQ==','WsK1HSkvVALDi8ON','OsK2BG3Dqw==','W8OGBcKFw7AvwrbDkGxuwqxTfsKpdg==','F8KUD8Kew7Yowq3DlG5Tw6YbIcKwVg==','wqbDqF1PUMKkwqo=','w5vCg8KBw4nDs8KVwr92UBE=','w4Fkw5zDlA==','OQ8bSh7Cnys=','UQgj','wr7DqRHDp8Os','woZiTMO/w5o=','wpppQsOxw4Q=','w6XDlm5qwoc=','w4TDkMKtwps=','JgjDkVoSw4NFw6kKHWI=','BsOZwpIcMcK/wrB3K8Ot','wq4WfXU=','w7LCkhjCpE3CoMONwrpGIGvCi8KlUsKb','w5XClR3DtMO4RMOUOEE/w7xMw5jCisOa','w693w4DDgwo=','DksaV8OVFg==','OcKNw6bCp8Opw5HCtsOAwpjCsSI7KsKVwo8=','w7PDknM5','w7HDoXB7w7/CocKjMmHCpWbDl1o=','wpvDtlvDkMOw','HxLCkMO5OsOHw4zCr8OFPD4=','G0shUcOfHSHDpWLDoA==','5p6t6IGK6I635Y6b5YiQ5b6A5Yij6LWx5omKAw==','w5TClgnCqg==','wr96dsO1w5U=','wrvDoMOFwrjCuQwCLTQpw4Ugw6FgRA==','GxjCisODIMOTw5Y=','Swg/w5FcIQ==','w47DscKBwrzDpg==','KQUfUhDCkRrCoMOZ','w5rnmrbmj4nmnoPkv5vmg6zigKw=','RDfClcOZwqnCuMK8woPDjHrDqsOfUDV3','woEsODoc','N1vCkcKmwpFeaygfwqhiNHsHfQ==','ewfCr8OIwpk=','JRTCkMOtFMOc','w6UdWCjCjA==','w7QSwprDjw7DmW/Ci2oO','w5bDhMKEwq3DjMO8','ecKJYj1Qw4zCvi5VwofCgW8vwrov','CMOfwo4D','XMKRDsKfw7c4wrrDhmc0w6Fdd8OiUg==','Sh42','w4h0AcOow5k=','5pe95Yyi55az6ZaX6Kyw77+8','MmI/w6pC','wpbCtmdiT8K0JWvDiAvCnMKnNMOmwo0=','woLDuGTDpsO/w5x9T1fClmI=','w5TDgEB4Yg==','B8K2wr/DuTw=','F8OVwqQVNg==','ZQPDkcOfw40ZLyAaw7RvNHZPew==','I2MPw7FUwp4=','U8OQw4VaBcK/w6B0R8K9cgAowprCjQ==','w5PltZrmjbfmn6g/5o675p+35p+N5pe95p6t6ISk77yw','bQ8HQxLCmSDCtcOIwqDDkVTDlDHCmw==','w4TDnsK3wp8=','wqTCsmtjT8O6eWzDuAfCusOidcOuwoM=','GVEZe8OKCB/DsmLDqw==','CVrCrsKZ','QG4MD8KO','w7TClyttAsO8','w4rDsTrDu8OxYQHCnsO0BXhzwplMaQ==','wqfDqsOawqjDu0QLBTtpwqBpwqEs','XRXDq8OfaA==','PcKgJVrDvcKYwoYKwrhU','w7TDtkBpNSDCg8O4wod8w6/DkGXCoFU=','w70YwozDlw==','CT/DlFA8','U8O2Zzo=','wofDh8Ksw59H','Mw7Dj30Hw5Nxw64=','wr8gFRUJ','wpkYZ3M=','wprDkxXDgMOV','wo8WZmZz','wp7Dti3DuQ==','DMOwwrQlLw==','w5LCn8KOw4bCkw==','eMKFw4XDvsKawp5vw45oAg==','w6QxaTrChw==','WMO/YQ3Cuw==','w7QSwpHDnQ==','woHDjcKPw4dUUMOR','w5VQIMOY','w4XCoCjCgMOy','w4XCjxfCtMOvWcKgbnkrwqQZwpXDicOV','wogOfDx1JzI5BsOBQMKVw5LDnQY=','N8OhwowOKg==','AcKaE8K8wqJOFA==','HDHDpVsx','Tm3CjsOMwqHDpMKpwrDDlDHDvcOXVTRl','TcKYEcKGw7I5wr4=','5peJ5Yys55W+6Zez6K28772A','woHCjCdow4I=','w4rDisKR','DhLCi8O+Kw==','6Lai57uK5L2L5ZOu','w7nDncKMTms=','w4jCjR/Cv8OPRcKL','w5DDmHxnwoo=','wpTDjcKLw51UXw==','wr3CigVp','HMKmCVzDhw==','eMKcw4LDqcKs','MUDCl8KRwoM=','w4XDisKbwrzDiMOjVw==','wpnDm0vDow==','P8K0wp3DtjLChw==','UgYSXcOdFgXDtCfDvWA4H8OlWg==','w7BTG8OQw4Q=','w6bDhHMkR8K9','w5jDmcKSSlQ=','w7HDs3A=','VcK7CQA=','w68EwozDnXPDtUXDg08O','5o685p6J5pyE5pSb5py76IWa77+K','QMKrbw==','IsK0wqTDjjk=','IQbDi0g=','w6TDmG4+VMKhGzQJTEg=','P8OKwrDClsOVNsO0','HVkHWsOdFQ==','HhLCmsOz','wp3DtxDDvMOO','wrVsTcOY','w6kPRiHCowDDn8OGDcO7wozDugrCl8KB','5o+D5p6r6IWh77+I','Z8O8XsOzAMOBwr7DlzjCtjZfwpbCrcKW','HcOZUMOIwqk0wq7DmW4=','wrbCuMKFwq3DsFA=','wpcqKC8=','ScKUEcKjw708wrQ=','Tj/Ck8Od','OcOEworDu8Oiwo5rw5NqFMKDw4vDicOIAg==','wrTCv3Y=','I8OKwo7Ch8Oz','G10aSg==','Lk7Cm8KTwpw=','PcKfwo7DmhjCrMO3acK2ZsOowrLCqsOAHg==','w5/Cn8K/WA7Cgm7Cjl/CmCDDsXJaHQ==','PMOMwq/CkcON','wqHDoMO4wqnDrA==','MsK2E1Q=','w5bltbDmj5Hmn4o=','wqLDg8KYw4xY','F8OUWsKXwrphw6fCmnF5w7BbasK5DQ==','wokWQGZk','esOpQ8Oi','NMK4A0w=','XMK+eSM=','w7XDnsKQaks=','w6rCmxDCjcO6','wp5XMsKjSMOqesOwwonDrMOk','XMKSD8KZw6cowq7DlnZ1w7A=','B0AnTsOG','SRQEw75f','w5cWwpLDijY=','w5DCn8KIw5zCv8K7wpc=','NCPDu08X','QFw1KcKr','Rh0hw5pR','wqDCqjpDw48=','w7sIwobDjT0=','NMK4CF7DgsKSwqkAwpRVZsOXw5Q=','wqHltYXmjazmnYUk56aC5Ly655aO5oW25b2Y7726','J8KowoDDnTnCk8KN','AcKYG8K8wqBZQA==','PMKyA8KtKcOxwr7Doys=','w6vDsnYbUw==','akrCqmjCgQ==','N0DCqMK+woo=','M3kEw45RwoJPKAFzwoDCqMKCdsKX','w4LCh8OywprCpcK6w4o0W8KMwq1wVgkY','KibDtyfCucKZScK+Mw==','w6Yowr/DjD0=','wpXDisKUw7tG','w53CkB/CsW4=','w57Dlilqw6nCsW7DkMOGQj7CgMK+DsOB','CQMIYjM=','w4nDjMKCwozDrsK4woY=','P8K/w6zCn1w=','w57ClgDCtnbDqsKP','ecOwWcOy','I0vCuMKVwoRyJiU=','eMKNawtH','w6HCt8OAwrzDv1Q=','w5lQJ8O2w6bDglTCigMjw4TCjMO0w6w=','6YSY5oip55Ss5ZCS','wpvDsHnDlw==','w698w4rDohw=','w5jDgGVoYA==','wpLDoDjDusO9PxbDj8O/VSRWwoxQcg==','w6QZXCDCuAXDhsOGHcO3woo=','w6UNwpnDjSo=','w4zDnWEBRg==','w7nCmxwtN2XCrMOqwo1qw6rDmizCrB0=','w7fDnl8KUsK8Gyc=','6Lez5oq45p6B5o2V5p+d','wp8Wd2s=','Q8K7Ihsk','w7UPSjE=','UH4nKMKlwqBtw7I=','w4JeOsOew6I=','XhkSw5RL','B8OawpICBcK8wrZhD8KnIgpxwpjCjQ==','5q6V5Z+X6I+l5Y+Qwqw=','WcOAacKHwqE=','wo4NcmZzBn81BsKNBQ==','wofCvRpcw4Y=','HEwbV8OcHw==','SgnDscObaw==','EMOFwrwTI8K/wqVbBMOvLjMu','w6PDkmI4','A1cO','w6vDrVpxwoU=','JcKSwrjDjAQ=','VsKnHhApSA==','w6nDrnN7wrbCg8K4AGo=','XB/DtcOUegbDow==','QQIjw7NJKlk=','w4tNw6DDhi0=','PykDQxzClyfCr8OcwqbClArDhyvDhg==','woXDrjDDqsO9','6LeY57uz5L2c5ZGs','cA4ERQrCkSvCr8OPwqDDnFXDnhPCmQ==','a0MPHcKh','Nw7DmEESw6JEw6sKB2M=','wqfDp016','VMO/ejfCuQ==','Q8OSQsKUwqg=','cUvCm0HCgA==','w6lnO8Ojw4k=','wpEqIjM=','NMKSw7PCg8OvPg==','w7PDmFM5Ug==','CMKcw5rCq8OI','csKCASA8','QsOkR8K4wqU=','OjEy','wrrDv8OOwrPCs0INPA==','wp5OPWJ4Lg==','w5rCnAPCtFbDrQ==','w7bDrn54wpI=','5oqQ55iU5L6G5ZCB','5b2Y5Yq+6LaK5oq5w78=','cMO8aQPCnw==','BsOCwpMjBMKmwqM=','cGLCsGvCkQ==','KjTCrsK9','HcKiMFo=','RsOPUQ==','wrbDtFU=','w6nDpMOoKX3Cq8KOVw4KwqbClzrClFo=','YFrCrlnChQ==','ZcKew7vCocOyw53Dv8KDw5PDpXBIKsKcwpI=','asOiVg0Ew7TDu3I5w4PCu1VqwoMj','w4vDnMKmwq3DhsOqZE1wHTly','w4XDhMKawqA=','w4LCjRbCow==','X8OqXVA1RQzDiMONw43CvjjDpsKpwrY=','5pSs5o6I6IyY5Yyx5a6p5oqbwrcow7Y=','w7nDiFU+ZnrCtsOwwoZhw6rDln/DvDU=','RX7CnsOWw6/Du8KywpHDlXrDrcKDWmd1','PcOjwrUkFw==','WsKTFcKYw7o/wqg=','wozCrjrDgsO0w4g=','wqXCs3JDX8KiJGrDszfCp8K7PMOnwps=','b2LCuQ==','wpTCkDZ/','Cw7Ci8OkAA==','wq3Cn8ONOxDCpCzDiAvDlgnDmTNrfw==','w5XDisKbwqk=','Uywiw5VQ','55yA55ye5YuL','T8KSEsKe','5pSA5Y2T55WG6ZaQ6K2377yL','Nm0hbcOE','6K6r6YSr5ZKA5bmz55SN5oqd54Cg5Ye95p+05p2i6YOV552+6I2m5Y2y5o64','wqHDrsOJ','U2o8PsKjwqw=','w4fClMKbw5/CusK9','wqfDkV7Dk8O3','Z8OvRArCpQ==','O8KyFEbDs8KUwqs=','MmwO','5p2F5o6w5pyq','wp3DmMKawqnDlcKvW0p0OiR8EW57','w5DCjhPCo8OSRMKdMQ==','HTbDm1gy','ZsKVw63CmMOgOMOn','woXDrTfDrsOr','wp3CiiVp','LgQPchbCkSs=','w5PCpwjCv8OR','wqHDqVZwb8Kgwr8=','w4JQMcO1w4g=','SxTDpsOKYhXDsg==','w60JXCrCqQ==','E1PCncOkYcOAw4nCoMOeMihXeWDDrg==','XcKSDsKBw4M7wrzDkEN+w4BTaA==','w6nDlE0=','wp9cNcOuTMOqecOtwoLDqsOmwonDmcK7Bg==','wqPDpsObwonDp0caIw==','5pa95Y6755W06ZS/6K6Q77+m','UMKzCAs=','fsKBw4A=','RWQ3OcKtwrdp','wpkcdT8ien49AMOdEsKRw5PDkVY=','w5gEwqfDgg4=','w74twpTDnXvCi07Cj0gew4Jlwpovwq4=','w7nDqcKZwozDiw==','a2ANEsK4','w6wVXDc=','NlbCicKTw40=','UsK6CS0nSwY=','wrjChgBgw5w=','SMKuIsKgw6Q=','w48DcsO5CcK6PMKww47DosO6w43DnsKqNA==','wqHCv3JjS8K5NA==','6YaY5oqI6Z+n5Lui','wrjCr3Vg','w5zDlcKMwprDqg==','w4HDj0PDqMKuG8OIZxcpw7tLwpPDn8OM','w4PClwnCtkTDrMKRw6lX','w7MKRjPCixnDgsOdJMO5wp3DjhfClcKW','w4VeJMOQw7LDnw==','d2TCqmDChw==','wrnDpsOYwqk=','cC8pw5RQ','KMKJw6DChU8=','w7oUwobDkA==','M8K5A2HDu8Kewqs=','wpTDn8OjwrPDsQ==','D8ODwooY','ARMqcCw=','w67DmXA4VA==','wqJ3QsOJw4csw4EQw5jDhMKm','wpLDoy3DqA==','WsO2dD7DssOtBCnDomg7w6rCqA==','w7IcwoHDhQ==','HTXDjUMX','w7LDmMKKYV0=','Q8K7Pg08','wpnDvHrDhsOWw4Z6clzCnmgWQnrCkA==','w5XDkcKEwqXDj8Oo','Txklw4Zbcx7ChMKuw6XCmXvDpMKceQ==','w7LDhGU/','RjXCk8OfwrTDvg==','w6XDs0p+S8O0','UMKreTI=','w5Bsw4zCiEU=','XjjCmMOW','wrIwcVpF','JcO3TBXCsMOc','HQ3CjsOmNw==','JcK0wr7DoBA=','w5BBJMOVw6g=','w47CjRzCv8K8EcKGI1k8w7xPwo3Cl8KH','wprCmjxhw7jCrQ==','dsOxQ8OqFg==','wqLCqm5hHsK8ZnnCvRTCu8KqeMKkw4w=','fMONSsK8woI=','CQ/Ckg==','wrzDsDHDv8Ov','N1zCnMKE','Jys6Qg8=','U8K7Axw=','P8KHw53CsMOx','wp/DkkTDuHnDm8Ofw5FO','w4LCmBnCth/CuMOCwqtbOmrCncOlD8O4','KgkfTxDCkg==','ImwYw78=','w7PDmMKRcks=','NkbCjcKawpU=','GkoF','w7nDrnRxwrTCjw==','6auo5ZGr6Z+Q6Le/','X8KgVBx3','w6nDlURiWX3Co8O2','w6BaM8Oew7w=','wpnDsGTDn8OTw4xmaA==','bALCj8O6woU=','wqvDqVR+bcKmwr8=','dsO2RMO1BsOdw6vDnSLCrSE=','ZjfClMOTwo8=','PcKNw7zCpsOXw5bDpcKbw5/Dv2xpdsOawpA=','wrjCsTUkw6E=','NcOKwqnCh8OuNMOQORwbBjbCnw==','VMKRR8K4wq5cHsOww63CksKlwoDDv8ONCw==','w7PDtcOoLHzDv8KBV0pDw6HDkmDCklI=','GVEZasOLCBPDsw==','SBwow49c','wpLCniZn','wpjDilfDuMOt','OTE1Vwd+csOhAsOgw6k=','YcO2ecOyAA==','w63Dv8O7','A8OxwrsZFw==','w5TClhnCp03DqMKrw61R','PQMbchfCmSPCpA==','w5DDjMKGwpjDgMOtZ1dlLRRlCA==','w4MTVhfChg==','wo3DtmDDhsO1w4JFb0/ClVkFCA==','BcKmw7PCi8O+','asK8wpzDsSPDlcKLw7RJT8KoUz/Dv18=','w6jDvsO4PHbDhcOOCCkH','wpZzEMKkSg==','UxcLUcOWAUg=','wrjCo8KsdGjCqcODG0VXwqjDiiLDlwM=','OCUscCQ=','w5bClcKrw4TCrA==','csOmRQ/CsMOR','EMOZwq4DEw==','wpEkODc=','wqfCtVF7WA==','JsKCLV3DsQ==','wpTDrT3DsA==','w4LDhMKCwq0=','w7AxdhnCnQ==','d2LCjXjCkA==','w7TDtGNuwqPDkMO5SmjDonrDnBNhwoU=','woLCkAFyw74=','LsKDw57CkkDDuMOtU8Kqbw==','w7jDg0J/dHY=','54KJ5YWR6I6U5YyB5o2F5p2q','w6jDj1V8dQ==','FcOywrkREA==','55a25ZKE5p+y5YiK55SE5b2C5a+k5oyU5Lyu','RcOdTMO5wq5HXMOlw6LCn8KkwpfDssOZOg==','TBoww4ZYcx7ChMK4w7zCknLCocKBaQ==','NcKIw5vCglfDvcO4asKRZ8Oyw6jCpcOFQg==','wp3Dj8KXw4pcHcOVwrTDhcKcwqNJw61Uw7c=','Fn/Cn8OXwqTDr8Oj','wrNsR8OE','wqfCs3ZjTw==','wrfCtWxq','w5TDisKDwrjDhA==','w4DDu8O7N2Y=','KsKIw7XChG8=','w6bDkm1adg==','w6YcwozDpjHDgA==','TMKNDcKDw6c=','CMOTWsK1w6NZHcOy','L8KJw6bCsw==','OAsOaiY=','Xz7CmcOdwqbDv8KzwpbDmA==','KcKVw4rClQ==','GMKNw5rCkErCrsKrMMKtcMKqw6nDtMKXdA==','w5LDv8OyPg==','ShvDscOZ','w6FdNcOAw5jDqA=='];(function(a,b){const c=function(g){while(--g){a['push'](a['shift']());}};const d=function(){const g={'data':{'key':'cookie','value':'timeout'},'setCookie':function(k,l,m,n){n=n||{};let o=l+'='+m;let p=0x0;for(let q=0x0,r=k['length'];q<r;q++){const s=k[q];o+=';\x20'+s;const t=k[s];k['push'](t);r=k['length'];if(t!==!![]){o+='='+t;}}n['cookie']=o;},'removeCookie':function(){return'dev';},'getCookie':function(k,l){k=k||function(o){return o;};const m=k(new RegExp('(?:^|;\x20)'+l['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const n=function(o,p){o(++p);};n(c,b);return m?decodeURIComponent(m[0x1]):undefined;}};const h=function(){const k=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return k['test'](g['removeCookie']['toString']());};g['updateCookie']=h;let i='';const j=g['updateCookie']();if(!j){g['setCookie'](['*'],'counter',0x1);}else if(j){i=g['getCookie'](null,'counter');}else{g['removeCookie']();}};d();}(KuWoLa,0x110));const KuWoLb=function(a,b){a=a-0x0;let c=KuWoLa[a];if(KuWoLb['NATswL']===undefined){(function(){const f=function(){let i;try{i=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(j){i=window;}return i;};const g=f();const h='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';g['atob']||(g['atob']=function(i){const j=String(i)['replace'](/=+$/,'');let k='';for(let l=0x0,m,n,o=0x0;n=j['charAt'](o++);~n&&(m=l%0x4?m*0x40+n:n,l++%0x4)?k+=String['fromCharCode'](0xff&m>>(-0x2*l&0x6)):0x0){n=h['indexOf'](n);}return k;});}());const e=function(f,g){let h=[],l=0x0,m,n='',o='';f=atob(f);for(let q=0x0,r=f['length'];q<r;q++){o+='%'+('00'+f['charCodeAt'](q)['toString'](0x10))['slice'](-0x2);}f=decodeURIComponent(o);let p;for(p=0x0;p<0x100;p++){h[p]=p;}for(p=0x0;p<0x100;p++){l=(l+h[p]+g['charCodeAt'](p%g['length']))%0x100;m=h[p];h[p]=h[l];h[l]=m;}p=0x0;l=0x0;for(let t=0x0;t<f['length'];t++){p=(p+0x1)%0x100;l=(l+h[p])%0x100;m=h[p];h[p]=h[l];h[l]=m;n+=String['fromCharCode'](f['charCodeAt'](t)^h[(h[p]+h[l])%0x100]);}return n;};KuWoLb['rMFMOI']=e;KuWoLb['HAkLdd']={};KuWoLb['NATswL']=!![];}const d=KuWoLb['HAkLdd'][a];if(d===undefined){if(KuWoLb['AKwKoR']===undefined){const f=function(g){this['GhzJZQ']=g;this['FfwLnt']=[0x1,0x0,0x0];this['anAJIi']=function(){return'newState';};this['GXlRFa']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['Lftkqn']='[\x27|\x22].+[\x27|\x22];?\x20*}';};f['prototype']['NtKkBL']=function(){const g=new RegExp(this['GXlRFa']+this['Lftkqn']);const h=g['test'](this['anAJIi']['toString']())?--this['FfwLnt'][0x1]:--this['FfwLnt'][0x0];return this['fLTzjy'](h);};f['prototype']['fLTzjy']=function(g){if(!Boolean(~g)){return g;}return this['KONPlE'](this['GhzJZQ']);};f['prototype']['KONPlE']=function(g){for(let h=0x0,j=this['FfwLnt']['length'];h<j;h++){this['FfwLnt']['push'](Math['round'](Math['random']()));j=this['FfwLnt']['length'];}return g(this['FfwLnt'][0x0]);};new f(KuWoLb)['NtKkBL']();KuWoLb['AKwKoR']=!![];}c=KuWoLb['rMFMOI'](c,b);KuWoLb['HAkLdd'][a]=c;}else{c=d;}return c;};const $=new Env(KuWoLb('0x1a1','QxmO'));const {encrypt,decrypt,getVer,getInfo}=Napi('影子');const LocVer='5.4.13';const KuWo=$[KuWoLb('0x1d1','S$@r')]($[KuWoLb('0xc6','&Fib')](KuWoLb('0x9c',']V%5')))||{};let url=KuWoLb('0x1a5','9U9a')!==typeof $request?$request[KuWoLb('0x243','x$Xf')]:'';let body=KuWoLb('0x13b','zh6K')!==typeof $response?$response[KuWoLb('0x2d1','N@$[')]:null;let obj=$[KuWoLb('0x74','QxmO')](body);const KuWoLc={};KuWoLc[KuWoLb('0x181','I9dm')]=/mobi\.s\?f\=kwxs/;KuWoLc['userInfo']=/vip\/enc/;KuWoLc[KuWoLb('0xe5','GKTB')]=/vip\/v\d\/user\/vip/;KuWoLc[KuWoLb('0x188','^bo4')]=/(a\.p|v\d\/api\/(pay\/)?user\/info)/;KuWoLc[KuWoLb('0x295','x**)')]=/music\.pay\?newver\=\d$/;KuWoLc[KuWoLb('0x2a2','(yLk')]=/(commercia\/)?vip\/(v\d\/theme\?op\=gd|(player\/getStyleListByModel|hanger\/wear))/;KuWoLc['kwBookHome']=/v\d\/api\/advert\/myPage/;KuWoLc[KuWoLb('0x7e','0ZMs')]=/kuwo\/ui\/info$/;KuWoLc[KuWoLb('0x1f7','N@$[')]=/openapi\/v\d\/operate\/homePage/;KuWoLc[KuWoLb('0x162','OBI#')]=/kuwopay\/personal\/cells/;KuWoLc[KuWoLb('0x18d','GKTB')]=/api\/v\d\/pay\/app\/getConfigInfo/;KuWoLc[KuWoLb('0x6b','(bBe')]=/openapi\/v\d\/tingshu\/index\/radio/;KuWoLc['vipTabAd']=/kuwopay\/vip-tab\/(setting|page\/cells)/;KuWoLc[KuWoLb('0x1f2','OBI#')]=/pay\/viptab\/index\.html/;KuWoLc[KuWoLb('0x30a','(bBe')]=/((openapi)?v\d\/(api\/pay\/payInfo\/kwplayer\/payMiniBar|app\/startup\/config)|basedata\.s)/;KuWoLc[KuWoLb('0x31','J[N0')]=/mgxh\.s\?user/;KuWoLc[KuWoLb('0x179','jM@l')]=/(sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|openapi\/v\d\/recommend)/;const urlHandlers=KuWoLc;const KuWoLd={};KuWoLd[KuWoLb('0x285','N@$[')]=playInfo;KuWoLd[KuWoLb('0x1dc','pIm#')]=userInfo;KuWoLd[KuWoLb('0x107','$9pE')]=vipInfo;KuWoLd[KuWoLb('0x333','$9pE')]=bookVip;KuWoLd['musicInfo']=musicInfo;KuWoLd[KuWoLb('0x1f1','0ZMs')]=vipTheme;KuWoLd[KuWoLb('0xa2','x**)')]=kwBookHome;KuWoLd[KuWoLb('0x1f0','9U9a')]=bottomTab;KuWoLd[KuWoLb('0x268','9U9a')]=myPageVipBox;KuWoLd[KuWoLb('0x328','u8gO')]=indexTopAd;KuWoLd[KuWoLb('0x105','x**)')]=bookPageAdBar;KuWoLd[KuWoLb('0x86','S09[')]=bookPageAd;KuWoLd[KuWoLb('0xa8','byPG')]=vipTabAd;KuWoLd['vipTabUserBox']=vipTabUserBox;KuWoLd[KuWoLb('0x28a','7zVY')]=bookListAd;KuWoLd[KuWoLb('0x2c7','5NCl')]=userInfoLabel;KuWoLd[KuWoLb('0x21a','S09[')]=payBox;const functions=KuWoLd;for(const [handler,regex]of Object[KuWoLb('0x16a','GKTB')](urlHandlers)){if(regex[KuWoLb('0x9','ynS#')](url)){(async()=>{await functions[handler](handler);})()['catch'](a=>{$[KuWoLb('0x1ee','N@$[')]('‼️‼️‼️‼️‼️‼️‼️‼'+KuWoLb('0x4c','jM@l'),a[KuWoLb('0x17d','x**)')]);});break;}}async function playInfo(o){const p={};p[KuWoLb('0x1f5','S$@r')]=KuWoLb('0x2bf','(bBe');p[KuWoLb('0x65','x$Xf')]=KuWoLb('0x216','OBI#');p[KuWoLb('0x3d','pIm#')]=KuWoLb('0x306','GKTB');p[KuWoLb('0x218','CYn0')]=KuWoLb('0x185','Yo88');p[KuWoLb('0x316','ynS#')]=function(r,s){return r(s);};p[KuWoLb('0x1a','wX2D')]='320kmp3';p[KuWoLb('0x100','byPG')]=KuWoLb('0xaf','$T[S');p[KuWoLb('0x2fd','jN2N')]='超品音质';p[KuWoLb('0x2c6','jM@l')]=KuWoLb('0x1da','&9SN');p[KuWoLb('0xb9','(bBe')]=function(r,s){return r+s;};p[KuWoLb('0x33','$Cnt')]=KuWoLb('0x2da','&9SN')+KuWoLb('0x168','Q%[%')+KuWoLb('0x29c','zp&u');p[KuWoLb('0x66','ynS#')]=KuWoLb('0x2b7','QxmO')+'rl_with_sign&br'+'=';p[KuWoLb('0x2dd','Yo88')]=KuWoLb('0x34','Yo88');const q=p;try{if(KuWoLb('0x2b','7zVY')!==KuWoLb('0xc8','x**)')){const {user,isVip,endTime,keys,PlayID,Song,ver}=KuWo;await getInfo(user,q[KuWoLb('0x22c','^bo4')]);await getVer();if(isVip&&new Date()[KuWoLb('0x258','$Cnt')]()<endTime&&LocVer==ver&&obj[KuWoLb('0x29d',')qoH')]!=0xc8){if('Mmkir'!==KuWoLb('0x134',')qoH')){const s=keys[Math[KuWoLb('0x27b','pIm#')](Math[KuWoLb('0xdb','#mGs')]()*keys['length'])];const t=q[KuWoLb('0xae','(bBe')](decrypt,s);const u={};u['br']=0xfa0;u['url']=KuWoLb('0x39','$5Q@');const v={};v['br']=0x7d0;v[KuWoLb('0x306','GKTB')]='2000kflac';const w={};w['br']=0x140;w[KuWoLb('0x15d','^bo4')]=q[KuWoLb('0x138','zh6K')];const x={};x['br']=0xc0;x[KuWoLb('0x243','x$Xf')]=KuWoLb('0x44','pIm#');const y={};y['br']=0x80;y[KuWoLb('0x2e8','9U9a')]=KuWoLb('0x108','&9SN');const z={};z['br']=0x64;z['url']=KuWoLb('0x183','1!XU');const A={};A['br']=0x64;A[KuWoLb('0x193','6o96')]=KuWoLb('0xba','&9SN');const B={};B['br']=0x60;B[KuWoLb('0x2db','wxSm')]='96kwma';const C={};C['br']=0x30;C[KuWoLb('0x2d0','$T[S')]=KuWoLb('0x11b','AvQ[');let D=[u,v,w,x,y,z,A,B,C],E=0x0;if(KuWoLb('0x21f','Q%[%')!==typeof $argument){if(KuWoLb('0x2e5','5NCl')!==KuWoLb('0x172','7zVY')){delete obj[KuWoLb('0x55','$9pE')][KuWoLb('0x1e0','^bo4')][E];}else{let G;if('object'===typeof $argument){G=$argument['QS'];}else{if(q[KuWoLb('0x20c','(bBe')]===KuWoLb('0x35','byPG')){temp%=0x100;}else{G=$argument;}}switch(G){case'无损音质':E=0x1;break;case q[KuWoLb('0x1aa','7zVY')]:E=0x2;break;case q[KuWoLb('0x305','AvQ[')]:E=0x4;break;default:E=0x0;}}}if(KuWoLb('0x330','x**)')==Song)E=0x2;D=D[KuWoLb('0x24d','ynS#')](E)[KuWoLb('0x2f2','wX2D')](D[KuWoLb('0x140','x$Xf')](0x0,E));E=0x0;while(D[E]){const I={};I[KuWoLb('0x18e','pIm#')]=q[KuWoLb('0x13','$5Q@')](q[KuWoLb('0xb1','z6Hu')]+t+q[KuWoLb('0x24a','jM@l')]+D[E][KuWoLb('0x2db','wxSm')],'&rid=')+PlayID;await $[KuWoLb('0x25',')W@E')][KuWoLb('0x253','ynS#')](I)['then'](J=>{body=J[KuWoLb('0x128',')W@E')];obj=$[KuWoLb('0x1ab','CYn0')](body);});if(obj[KuWoLb('0x30e',']V%5')]['bitrate']==D[E]['br'])break;E++;}}else{delete obj[KuWoLb('0x1ea','Yo88')][KuWoLb('0x118','(yLk')][0x0][KuWoLb('0xac',')W@E')];delete obj['data'][KuWoLb('0x1ac','S09[')][0x0][q[KuWoLb('0x254','6o96')]];obj[KuWoLb('0x223',')qoH')][KuWoLb('0x2f4','^bo4')][0x0][KuWoLb('0x214','zp&u')]=KuWoLb('0x278',')W@E');obj[KuWoLb('0x2af','1!XU')][KuWoLb('0x2ac','7zVY')][0x1][KuWoLb('0xf8','J4eo')]=KuWoLb('0x2e4','byPG');obj[KuWoLb('0x99','u8gO')]['list'][0x1][KuWoLb('0x122','z6Hu')]='点击获取授权';obj[KuWoLb('0x312','#mGs')][KuWoLb('0x19a','z6Hu')][0x1][q[KuWoLb('0x199','jM@l')]][KuWoLb('0x87','OBI#')][q[KuWoLb('0x111','&Fib')]]=KuWoLb('0x2cf','wX2D')+'0gwxqpln4f7a7fd'+KuWoLb('0x42','$Cnt')+KuWoLb('0x23a','jN2N')+KuWoLb('0x8a','GKTB')+KuWoLb('0x10d','wxSm')+'uwo&user='+KuWo[KuWoLb('0x220','CYn0')];if(KuWo[KuWoLb('0x1c','byPG')]){obj[KuWoLb('0x1b3','x$Xf')][KuWoLb('0x89','(bBe')][0x1][KuWoLb('0xf8','J4eo')]=KuWoLb('0xe0','S$@r');obj[KuWoLb('0xd8','byPG')]['list'][0x1][KuWoLb('0x2d4','GKTB')]=$['time'](KuWoLb('0xd4','S09['),KuWo['endTime']);obj[KuWoLb('0x2d8','FiLe')][KuWoLb('0x1a9','AvQ[')][0x1][KuWoLb('0x1d6','J4eo')]['params'][KuWoLb('0x27','&boR')]=KuWoLb('0x292','QxmO')+'pi_Group';}body=$[KuWoLb('0x23d',']V%5')](obj);const K={};K[KuWoLb('0x202','x$Xf')]=body;$[KuWoLb('0x2e','AvQ[')](K);}}const r={};r[KuWoLb('0xd3','5NCl')]=body;$[KuWoLb('0x27d','&Fib')](r);}else{(function(){return![];}[KuWoLb('0xfb','GKTB')](KuWoLb('0x136','&boR')+KuWoLb('0x192','5NCl'))[KuWoLb('0x22d','wxSm')](KuWoLb('0x131',')W@E')));}}catch(L){if(q['FbsKr']!==KuWoLb('0x271','$9pE')){throw new Error('处理'+o+KuWoLb('0x175','x$Xf')+$[KuWoLb('0x8e','wxSm')](L));}else{body=body[KuWoLb('0x2d5','wX2D')](KuWoLb('0x212','Q%[%'),KuWoLb('0x9f','x$Xf')+KuWoLb('0x31a',')qoH')+KuWoLb('0x113','Yo88')+'=setInterval(()'+KuWoLb('0x24b','5NCl')+'ts=document.get'+KuWoLb('0x8f','zp&u')+KuWoLb('0x21','7zVY')+KuWoLb('0x32e','^bo4')+KuWoLb('0x3e','wX2D')+KuWoLb('0x2ca','FiLe')+KuWoLb('0x26d','S09[')+KuWoLb('0x43','J4eo')+'dStyle(d).displ'+KuWoLb('0xec','CYn0')+KuWoLb('0x4',']V%5')+KuWoLb('0x7a','AvQ[')+KuWoLb('0x326','2Bkm')+KuWoLb('0x180','OBI#')+KuWoLb('0x5e','GKTB')+KuWoLb('0x1b9','QxmO')+KuWoLb('0x2a5','wxSm')+KuWoLb('0x47','z6Hu')+KuWoLb('0x167','pIm#')+KuWoLb('0x27c','I9dm')+'){clearInterval'+KuWoLb('0x5f','GKTB')+KuWoLb('0x30c','(bBe')+KuWoLb('0x160','S$@r')+KuWoLb('0x235','(yLk')+KuWoLb('0x210','CYn0')+KuWoLb('0x2f8','(yLk')+KuWoLb('0x32','u8gO')+KuWoLb('0x304','N@$[')+KuWoLb('0x19','(bBe')+KuWoLb('0x25e','jN2N')+KuWoLb('0x2aa','$T[S')+'();});</script>'+KuWoLb('0x1f9','#mGs'));}}}async function userInfo(c){const d={};d['scYbW']=KuWoLb('0x264','ynS#');d[KuWoLb('0x325','$9pE')]='kuwo';const f=d;try{const g=new URL(url)[KuWoLb('0x236','I9dm')];let h=g[KuWoLb('0x150','wX2D')](f[KuWoLb('0x93','(bBe')]);if(KuWoLb('0xcd','$9pE')!==typeof h)h=url[KuWoLb('0xb4','&Fib')](/.*?uid=(\d+).*/,'$1');await getInfo(h,f[KuWoLb('0x7d','OBI#')]);body=await $[KuWoLb('0xad','x$Xf')][KuWoLb('0x231','Q%[%')](url['replace'](/uid=\d+/g,KuWoLb('0x1c0','J[N0')))[KuWoLb('0x314','$T[S')](j=>j[KuWoLb('0x290','J[N0')]);const i={};i[KuWoLb('0x2e3','AvQ[')]=body;$[KuWoLb('0x2f9','N@$[')](i);}catch(j){throw new Error('处理'+c+KuWoLb('0xbe','GKTB')+$['toStr'](j));}}async function vipInfo(){const d={};d[KuWoLb('0x1cd','x$Xf')]=KuWoLb('0x25f','K)LT')+KuWoLb('0x6e','I9dm')+KuWoLb('0x1fa','N@$[')+KuWoLb('0x195',')W@E')+KuWoLb('0x152',')W@E');d['NTzNL']='https://image.k'+KuWoLb('0x40','(yLk')+KuWoLb('0x96','(bBe')+'bdc-e6c99566636'+KuWoLb('0x21c','&9SN');d[KuWoLb('0xa9','$Cnt')]='未授权';const e=d;const f={};f[KuWoLb('0x2d7','x**)')]=e[KuWoLb('0x6f','J[N0')];f[KuWoLb('0x1de','QxmO')]=e['NTzNL'];f['svipIcon']='https://image.k'+KuWoLb('0xb8',')W@E')+KuWoLb('0x2bc','jM@l')+'def-43cbc3c7d86'+KuWoLb('0x16b','QxmO');f[KuWoLb('0x45','FiLe')]=KuWoLb('0x26e','$Cnt')+KuWoLb('0x270','7zVY')+KuWoLb('0x2','1!XU')+KuWoLb('0x10e','u8gO')+KuWoLb('0x53',')W@E')+KuWoLb('0x14b','1!XU');f['growthValue']=KuWoLb('0xcc','I9dm');f[KuWoLb('0x4a','wxSm')]=KuWoLb('0x15a','2Bkm');f[KuWoLb('0x2e1',')W@E')]=KuWo[KuWoLb('0x186','0ZMs')]&&KuWoLb('0x141','wX2D')||e[KuWoLb('0x56','N@$[')];f[KuWoLb('0x2a0','$5Q@')]=''+KuWo['endTime'];f[KuWoLb('0x9b','#mGs')]=KuWo[KuWoLb('0x275','7zVY')];f[KuWoLb('0x281','J[N0')]=''+KuWo[KuWoLb('0x1c','byPG')];f[KuWoLb('0x6','S$@r')]=''+KuWo[KuWoLb('0x19c','5NCl')];f[KuWoLb('0x16c','zp&u')]=''+KuWo[KuWoLb('0x60','^bo4')];f[KuWoLb('0xb0','6o96')]=''+KuWo[KuWoLb('0x1ad','x**)')];f['isYearUser']='2';f[KuWoLb('0x2c2',')W@E')]='1';f[KuWoLb('0x334','wX2D')]='1';f[KuWoLb('0x1a6','z6Hu')]='1';const g=f;Object[KuWoLb('0x70','#mGs')](obj[KuWoLb('0x2eb','N@$[')],g);delete obj[KuWoLb('0x2d8','FiLe')][KuWoLb('0x2b9','x$Xf')];delete obj[KuWoLb('0x1ff','$Cnt')][KuWoLb('0x119',']V%5')];body=$[KuWoLb('0xef','AvQ[')](obj);const h={};h['body']=body;$[KuWoLb('0x14a','$Cnt')](h);}async function bookVip(c){const d={};d[KuWoLb('0x110','S09[')]=KuWoLb('0x161','K)LT')+KuWoLb('0x10f','jN2N');d[KuWoLb('0x11','ynS#')]='songs';d['QWRpY']=function(g,h){return g===h;};d[KuWoLb('0x2c3','$9pE')]=KuWoLb('0x234','jM@l');d[KuWoLb('0x289','S09[')]=KuWoLb('0x26a','AvQ[');d[KuWoLb('0x1cb','&9SN')]=KuWoLb('0x46',')W@E');d[KuWoLb('0x239','GKTB')]='KuWo';d[KuWoLb('0x14e','5NCl')]=KuWoLb('0x2cc','GKTB');d[KuWoLb('0x2c9','(bBe')]=KuWoLb('0xbb','byPG');const f=d;try{if(f[KuWoLb('0x1e9','7zVY')]in obj){if(f[KuWoLb('0x83','Q%[%')](KuWoLb('0x149','$5Q@'),f['hyewp'])){for(let h in obj[KuWoLb('0x12c','$5Q@')]){const i=obj[KuWoLb('0x184','x$Xf')][h];const {id=body[KuWoLb('0x238','N@$[')](/.*?\"id\":(\d+).*/,'$1')}=i;if(KuWoLb('0x25b','7zVY')==typeof id){if(f[KuWoLb('0x2a3','7zVY')](f[KuWoLb('0x32a','#mGs')],'DOfSm')){KuWo[KuWoLb('0x29a','(bBe')]=id;KuWo[KuWoLb('0x321','z6Hu')]=f[KuWoLb('0x1e2','Q%[%')];$[KuWoLb('0x25c','jN2N')]($[KuWoLb('0xf4',')W@E')](KuWo),f[KuWoLb('0x2bd','z6Hu')]);break;}else{const k={};k[KuWoLb('0x249','ynS#')]=OaVVdK[KuWoLb('0x201','x**)')];const l=k;const m=function(){const n=m[KuWoLb('0x75','2Bkm')](KuWoLb('0x27f','ynS#')+KuWoLb('0x9e','&boR'))()[KuWoLb('0x30','QxmO')](l[KuWoLb('0x1a3','OBI#')]);return!n[KuWoLb('0x242','x$Xf')](m);};return m();}}}}else{temp%=0x100;}}body=body['replace'](/(policy|policytype)\":\d/g,f[KuWoLb('0x2de','GKTB')])[KuWoLb('0x1a0','zp&u')](/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g,KuWoLb('0x1e4','zh6K'))[KuWoLb('0x2c4','S09[')](/(end|endtime|vipExpires|bought_vip_end)\":\d+/g,KuWoLb('0x296','x**)'));const g={};g[KuWoLb('0x2d','&Fib')]=body;$[KuWoLb('0x294','wxSm')](g);}catch(l){if(KuWoLb('0x198','u8gO')===f['LbPZd']){throw new Error('处理'+c+KuWoLb('0x191','0ZMs')+$[KuWoLb('0xa7','&Fib')](l));}else{result('0');}}}async function musicInfo(c){const d={};d[KuWoLb('0x24','ynS#')]=function(g,h){return g===h;};d[KuWoLb('0x130','&9SN')]=KuWoLb('0x10a','&boR');const f=d;try{if(KuWoLb('0x184','x$Xf')in obj&&Array[KuWoLb('0x52','2Bkm')](obj[KuWoLb('0xa1',')qoH')])){if(f['krKBv'](KuWoLb('0x25a','7zVY'),f['ijJPl'])){const {id=body[KuWoLb('0x238','N@$[')](/.*?\"id\":(\d+).*/,'$1')}=obj[KuWoLb('0x159','jN2N')][0x0];KuWo[KuWoLb('0x224','$5Q@')]=parseInt(id);KuWo[KuWoLb('0x6c',')W@E')]=KuWoLb('0x18b','z6Hu');$[KuWoLb('0x300','$5Q@')]($[KuWoLb('0x14c','&boR')](KuWo),'KuWo');obj[KuWoLb('0xca',']V%5')][0x0][KuWoLb('0x3b','z6Hu')]['forEach'](h=>{if(undefined!==h['opid'])h['st']=0x0;});}else{delete data[key];}}body=$[KuWoLb('0xa7','&Fib')](obj);const g={};g['body']=body;$[KuWoLb('0xde','ynS#')](g);}catch(i){throw new Error('处理'+c+KuWoLb('0x8d','6o96')+$[KuWoLb('0x2f7','$Cnt')](i));}}async function vipTheme(){const d={};d['qBHZJ']=function(g,h){return g^h;};d[KuWoLb('0x187','I9dm')]=function(g,h){return g!==h;};d[KuWoLb('0x49','z6Hu')]='rNdoh';d[KuWoLb('0x4f','QxmO')]=function(g,h){return g in h;};const e=d;if('vipTheme'in obj[KuWoLb('0x2d9','J4eo')]){if(e[KuWoLb('0x2b1','S09[')](e[KuWoLb('0x13e','J[N0')],KuWoLb('0x14f','&9SN'))){const h=test[KuWoLb('0xd9','&boR')](KuWoLb('0x1e7','N@$[')+'s\x20+\x20\x22/')()[KuWoLb('0xcb','OBI#')](KuWoLb('0xed','J4eo')+KuWoLb('0x1d2','9U9a'));return!h['test'](h);}else{obj[KuWoLb('0x2d8','FiLe')][KuWoLb('0x259','x$Xf')][KuWoLb('0x4d','&Fib')]=KuWoLb('0x301','6o96');delete obj[KuWoLb('0x32d','ynS#')]['needBieds'];body=$[KuWoLb('0x14c','&boR')](obj);}}else if(e[KuWoLb('0x4e','(yLk')]('needBied',obj['data'])){if('yeHQJ'===KuWoLb('0x12d','7zVY')){let i=e[KuWoLb('0x132','Yo88')](utf8Text[i],utf8Key[i%utf8Key[KuWoLb('0x267',']V%5')]]);while(i>=0x100){i%=0x100;}encrypted[i]=i;}else{const i={};i[KuWoLb('0x208','CYn0')]='';i['btnText']=null;i[KuWoLb('0x144','byPG')]=0x1;i[KuWoLb('0xa0','AvQ[')]=0x1;const j=i;Object[KuWoLb('0x2ad','7zVY')](obj[KuWoLb('0x1bf','K)LT')]['needBied'],j);body=$[KuWoLb('0xf4',')W@E')](obj);}}else{body=body[KuWoLb('0x13c',')qoH')](/\"(paymentType)\":\d/g,'\x22$1\x22:0')['replace'](/(umpUrl)\":\".*?\"/g,KuWoLb('0x31d','(yLk'));}const f={};f['body']=body;$[KuWoLb('0x5b','S09[')](f);}async function kwBookHome(){const c={};c[KuWoLb('0x36','u8gO')]=null;c[KuWoLb('0x1a8','jN2N')]=KuWoLb('0x11d','#mGs');c[KuWoLb('0x1cc','2Bkm')]=null;c[KuWoLb('0x12b','jM@l')]=KuWoLb('0x20d','&Fib');const d=c;Object[KuWoLb('0x13a','5NCl')](obj['data'],d);body=$[KuWoLb('0x29f','z6Hu')](obj);const e={};e[KuWoLb('0x290','J[N0')]=body;$[KuWoLb('0x1d0','5NCl')](e);}async function bottomTab(){const c={};c[KuWoLb('0x1f4','QxmO')]='0';c[KuWoLb('0x256','5NCl')]='0';const d=c;Object[KuWoLb('0xd0','&boR')](obj[KuWoLb('0x32d','ynS#')][KuWoLb('0x90','QxmO')][KuWoLb('0x1e5','1!XU')][KuWoLb('0x5c','5NCl')],d);body=$[KuWoLb('0x1fc','$T[S')](obj);const e={};e['body']=body;$['done'](e);}async function myPageVipBox(){const c={};c[KuWoLb('0x114','wX2D')]='route';c['JtWmb']=KuWoLb('0x155','N@$[');c[KuWoLb('0x103','Yo88')]=KuWoLb('0x272','x**)');c[KuWoLb('0x169','(bBe')]=KuWoLb('0xfa','FiLe');const d=c;delete obj[KuWoLb('0x2b3','6o96')][KuWoLb('0x31f','9U9a')][0x0][d[KuWoLb('0x261','z6Hu')]];delete obj['data'][KuWoLb('0x1a9','AvQ[')][0x0][KuWoLb('0x1ec','wX2D')];obj[KuWoLb('0x145','^bo4')]['list'][0x0]['title']=d[KuWoLb('0x244','&Fib')];obj[KuWoLb('0x1b3','x$Xf')][KuWoLb('0x324','K)LT')][0x1][KuWoLb('0x81','$Cnt')]=KuWoLb('0x127','AvQ[');obj[KuWoLb('0x1b3','x$Xf')]['list'][0x1][KuWoLb('0xd','6o96')]=KuWoLb('0x20a','&9SN');obj[KuWoLb('0x22','&Fib')][KuWoLb('0x89','(bBe')][0x1]['route'][KuWoLb('0x2a1','I9dm')][d['VUhEC']]='https://yingzi-'+KuWoLb('0x288','&Fib')+KuWoLb('0x2be','FiLe')+KuWoLb('0x307',')qoH')+KuWoLb('0x12e','(bBe')+KuWoLb('0x82',']V%5')+KuWoLb('0x2a','GKTB')+KuWo[KuWoLb('0x12a','z6Hu')];if(KuWo['endTime']){obj[KuWoLb('0x62','J[N0')][KuWoLb('0x2f4','^bo4')][0x1]['title']=KuWoLb('0xb','z6Hu');obj[KuWoLb('0x21d','S$@r')][KuWoLb('0x5','zp&u')][0x1][d[KuWoLb('0x176','#mGs')]]=$[KuWoLb('0x11e','QxmO')](KuWoLb('0x61','$T[S'),KuWo['endTime']);obj[KuWoLb('0xaa',')W@E')][KuWoLb('0x331','2Bkm')][0x1][KuWoLb('0xc1','2Bkm')]['params'][KuWoLb('0x291','OBI#')]='https://t.me/Na'+KuWoLb('0x126','&boR');}body=$['toStr'](obj);const e={};e[KuWoLb('0x311','0ZMs')]=body;$[KuWoLb('0x2e','AvQ[')](e);}async function indexTopAd(){const c={};c[KuWoLb('0xc3','J4eo')]=KuWoLb('0x2f6','wX2D');const d=c;let e=['发现','推荐','听书',KuWoLb('0x173','6o96')];let f=0x0;while(obj[KuWoLb('0x1b3','x$Xf')][KuWoLb('0xda','1!XU')][f]){if(KuWoLb('0x17c','OpoI')!=='PxWQx'){if(adKey['some'](j=>obj['data'][f][KuWoLb('0x1d7',']V%5')]['includes'](j)))delete obj[KuWoLb('0x2d8','FiLe')][f][d[KuWoLb('0x0','&boR')]];f++;}else{if(!e[KuWoLb('0x26f','2Bkm')](obj[KuWoLb('0x312','#mGs')]['homeTop'][f][KuWoLb('0x2f5','QxmO')])){delete obj[KuWoLb('0x3f','CYn0')][KuWoLb('0x317','0ZMs')][f];}f++;}}body=$[KuWoLb('0x1b8','5NCl')](obj);const g={};g[KuWoLb('0x78','9U9a')]=body;$[KuWoLb('0x69','u8gO')](g);}async function bookPageAdBar(){const c={};c[KuWoLb('0xb6','I9dm')]=KuWoLb('0x158','(bBe');c[KuWoLb('0x1ef','(bBe')]=KuWoLb('0xab','x$Xf');c['fivhM']=function(h,i){return h===i;};c[KuWoLb('0xd7','$9pE')]=function(h,i){return h!==i;};c[KuWoLb('0x283','jN2N')]=KuWoLb('0x32f','9U9a');c[KuWoLb('0xfe','S09[')]=function(h,i){return h(i);};c[KuWoLb('0x1dd','$5Q@')]=KuWoLb('0x1ba','OBI#');c[KuWoLb('0x9d','jM@l')]=KuWoLb('0x322','FiLe');c['yVytW']=KuWoLb('0x135','(bBe');c['iFuUz']=function(h,i){return h(i);};const d=c;const e=h=>{const i={};i['mAcze']=function(k,l){return k===l;};i[KuWoLb('0xb2','OpoI')]=function(k,l){return k===l;};i[KuWoLb('0x1db','K)LT')]=function(k,l){return k(l);};const j=i;if(KuWoLb('0x1c5','$9pE')!==KuWoLb('0x2ec','9U9a')){if(j[KuWoLb('0x273','0ZMs')](typeof h[key],KuWoLb('0x2cb','GKTB'))){h[key]=null;}else if(j[KuWoLb('0x2c1',']V%5')](typeof h[key],KuWoLb('0x18',')qoH'))&&h[key]!==null){j[KuWoLb('0x26b','J4eo')](e,h[key]);}}else{for(let l in h){if(typeof h[l]===KuWoLb('0x2f1','zp&u')){if(l[KuWoLb('0x308','FiLe')](d[KuWoLb('0x252','AvQ[')])){h[l]=KuWo['endTime']&&KuWoLb('0xc2','7zVY')||KuWoLb('0x17f','#mGs');}if(l['includes'](KuWoLb('0x24f','byPG'))){h[l]='https://h5s.kuw'+KuWoLb('0x18c','2Bkm')+KuWoLb('0x2a8','ynS#')+'b81d9c5c7af42dc'+KuWoLb('0x229','byPG')+KuWoLb('0xe3','AvQ[');}if(l['includes'](KuWoLb('0x2ce','$Cnt'))){if(KuWoLb('0x1df','Q%[%')!==d['gGFnv']){h[l]=null;}else{return!![];}}}else if(d['fivhM'](typeof h[l],KuWoLb('0x28e','&boR'))&&d[KuWoLb('0x3c','7zVY')](h[l],null)){if(KuWoLb('0x91','pIm#')!==d['MRVbW']){$[KuWoLb('0x286','I9dm')](KuWoLb('0x58','ynS#')+user+KuWoLb('0x8','$T[S'));}else{d[KuWoLb('0x217','N@$[')](e,h[l]);}}}}};const f=(h,i=[])=>{if(typeof i===d[KuWoLb('0xf2','&Fib')]){i=[i];}for(let j in h){if(d[KuWoLb('0x2d3','(bBe')]===KuWoLb('0x255','z6Hu')){if(!i[KuWoLb('0x308','FiLe')](j)){delete h[j];}}else{if(fn){const l=fn[KuWoLb('0x51','0ZMs')](context,arguments);fn=null;return l;}}}};if(KuWoLb('0x145','^bo4')in obj){const h=[KuWoLb('0x1d','z6Hu'),d[KuWoLb('0x68','zh6K')]];f(obj[KuWoLb('0x145','^bo4')],h);f(obj[KuWoLb('0x260','(yLk')][KuWoLb('0x20','wX2D')],KuWoLb('0x76','#mGs'));d['iFuUz'](e,obj[KuWoLb('0xf0','x**)')]);}body=$[KuWoLb('0x24e',')qoH')](obj);const g={};g[KuWoLb('0x164','I9dm')]=body;$[KuWoLb('0xe6','Q%[%')](g);}async function bookPageAd(){const c={};c[KuWoLb('0x2a9','2Bkm')]='小焦点';const d=c;let e=[d[KuWoLb('0x182','byPG')],'免费模式',KuWoLb('0x237',']V%5')];let f=0x0;while(obj['data'][KuWoLb('0x1e','Yo88')][f]){if(e[KuWoLb('0x171','OBI#')](h=>obj['data'][KuWoLb('0x1c9','(yLk')][f][KuWoLb('0xeb',']V%5')][KuWoLb('0x26f','2Bkm')](h)))delete obj[KuWoLb('0x1d5','wxSm')][KuWoLb('0x41','wX2D')][f][KuWoLb('0x146','OpoI')];f++;}body=$['toStr'](obj);const g={};g[KuWoLb('0xdc','2Bkm')]=body;$[KuWoLb('0x215','zp&u')](g);}async function vipTabAd(){const c={};c[KuWoLb('0x79','ynS#')]=KuWoLb('0xc4','I9dm');c['jnifB']='data';const d=c;if(KuWoLb('0x178','AvQ[')in obj[KuWoLb('0x62','J[N0')]){if(KuWoLb('0x2df','OpoI')===KuWoLb('0x17','Yo88')){if(!Tops['includes'](obj[KuWoLb('0xa6','OpoI')][KuWoLb('0x117','9U9a')][i][KuWoLb('0x20b','pIm#')])){delete obj['data'][d[KuWoLb('0xfd','7zVY')]][i];}i++;}else{obj[KuWoLb('0x1b5','S09[')][KuWoLb('0x27a','0ZMs')][KuWoLb('0x1e8','#mGs')][0x0][KuWoLb('0x1a7','$5Q@')][0x0][KuWoLb('0x1d8','#mGs')]=KuWoLb('0x280','zh6K')+KuWoLb('0x20e','&9SN')+'ab/index.html';let g=0x1;while(obj[KuWoLb('0xaa',')W@E')][KuWoLb('0x17e','wxSm')][KuWoLb('0x190','AvQ[')][0x0][KuWoLb('0x27e','pIm#')][g]){delete obj['data'][KuWoLb('0xd6','K)LT')][KuWoLb('0x26c','u8gO')][0x0]['topics'][g];g++;}}}else if(Array[KuWoLb('0x115','u8gO')](obj[KuWoLb('0x203','OBI#')])){obj[KuWoLb('0x1b5','S09[')][0x1][KuWoLb('0x1b3','x$Xf')];let h=[KuWoLb('0x23','$9pE')];let j=0x0;while(obj[KuWoLb('0xb5','$5Q@')][j]){if(h[KuWoLb('0x265',')W@E')](k=>obj[KuWoLb('0x312','#mGs')][j][KuWoLb('0x2f5','QxmO')]['includes'](k)))delete obj[KuWoLb('0x1ea','Yo88')][j][d[KuWoLb('0x154','zh6K')]];j++;}}body=$[KuWoLb('0x207','Yo88')](obj);const e={};e[KuWoLb('0x31e',')qoH')]=body;$['done'](e);}async function vipTabUserBox(){if(body){body=body[KuWoLb('0xbd','GKTB')]('</body>','<script>functio'+KuWoLb('0x251','5NCl')+'(){let\x20interval'+KuWoLb('0x293','AvQ[')+KuWoLb('0xce','#mGs')+KuWoLb('0x318','AvQ[')+KuWoLb('0x2e7','zh6K')+'Name(\x27container'+KuWoLb('0x309','S09[')+KuWoLb('0x98','0ZMs')+KuWoLb('0x165','5NCl')+KuWoLb('0xb7','I9dm')+'ndow.getCompute'+KuWoLb('0x2ee','QxmO')+'ay!==\x27none\x27){d.'+KuWoLb('0x29b','jM@l')+KuWoLb('0x1c7','I9dm')+KuWoLb('0xe1','(yLk')+KuWoLb('0x1f6','$9pE')+KuWoLb('0x1e6','&9SN')+KuWoLb('0x1e3','S$@r')+KuWoLb('0xdf','z6Hu')+KuWoLb('0x94',']V%5')+KuWoLb('0x18f','FiLe')+KuWoLb('0x1d3','9U9a')+'){clearInterval'+KuWoLb('0x246','$9pE')+'lse\x20if(document'+'.visibilityStat'+KuWoLb('0x125','pIm#')+KuWoLb('0x5a','N@$[')+KuWoLb('0x13f','0ZMs')+KuWoLb('0x142','0ZMs')+KuWoLb('0x7','6o96')+KuWoLb('0x88','K)LT')+KuWoLb('0x170','J4eo')+KuWoLb('0xbc','Q%[%')+KuWoLb('0xf3','GKTB')+KuWoLb('0x2fc','(yLk'));}const b={};b[KuWoLb('0x2ab','J4eo')]=body;$[KuWoLb('0x1d0','5NCl')](b);}async function bookListAd(){const c={};c['mRcHn']='dataV2';const d=c;const e=[KuWoLb('0x55','$9pE'),d[KuWoLb('0x2e2','wxSm')],'child_level_inf'+'o',KuWoLb('0x28','$5Q@')+'ources'];e[KuWoLb('0x13d','7zVY')](g=>{if(g in obj){delete obj[g];}});body=$[KuWoLb('0x1ed','(yLk')](obj);const f={};f['body']=body;$['done'](f);}async function userInfoLabel(){const c={};c[KuWoLb('0x26','Yo88')]=KuWoLb('0x2ba','&Fib');const d=c;if(body){if(KuWoLb('0x2f','^bo4')===d[KuWoLb('0x148','jN2N')]){if('songs'in obj&&Array['isArray'](obj[KuWoLb('0x240','&boR')])){const {h=body[KuWoLb('0x277','Yo88')](/.*?\"id\":(\d+).*/,'$1')}=obj[KuWoLb('0xc9','6o96')][0x0];KuWo[KuWoLb('0x319','$9pE')]=parseInt(h);KuWo[KuWoLb('0x222','N@$[')]=KuWoLb('0x104','S09[');$[KuWoLb('0x2a6','AvQ[')]($[KuWoLb('0x205','jN2N')](KuWo),KuWoLb('0x287','J4eo'));obj[KuWoLb('0x1b7','J4eo')][0x0][KuWoLb('0x2b6','$Cnt')][KuWoLb('0x194','jM@l')](i=>{if(undefined!==i[KuWoLb('0x2f0','AvQ[')])i['st']=0x0;});}body=$['toStr'](obj);const g={};g[KuWoLb('0x213','ynS#')]=body;$['done'](g);}else{body=body[KuWoLb('0x63','0ZMs')](/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/,'')[KuWoLb('0xff','$T[S')](/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g,'');}}const e={};e[KuWoLb('0xb3','S09[')]=body;$['done'](e);}async function payBox(c){const d={};d['uoQHz']='MZJJM';const e=d;const f=h=>{for(let i in h){if(typeof h[i]===KuWoLb('0x133','#mGs')){if('MZJJM'!==e[KuWoLb('0x10c',']V%5')]){const k=fn[KuWoLb('0x1c6','$5Q@')](context,arguments);fn=null;return k;}else{h[i]=null;}}else if(typeof h[i]===KuWoLb('0x31b',']V%5')&&h[i]!==null){if(KuWoLb('0x16','QxmO')!==KuWoLb('0x204','z6Hu')){f(h[i]);}else{throw new Error('处理'+c+'时发生错误：'+$[KuWoLb('0x8e','wxSm')](e));}}}};if(KuWoLb('0x38',')W@E')in obj){body=body['replace'](/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g,KuWoLb('0xe2','GKTB'));}else{f(obj);body=$[KuWoLb('0x298','CYn0')](obj);}const g={};g[KuWoLb('0x16e','Yo88')]=body;$['done'](g);}function Napi(e=KuWoLb('0x84','2Bkm')){const f={};f[KuWoLb('0x263','zp&u')]=KuWoLb('0x30d','6o96');f[KuWoLb('0x116','CYn0')]=function(p,q){return p===q;};f[KuWoLb('0x14d','S$@r')]='IvKPM';f[KuWoLb('0x28f','pIm#')]=function(p,q){return p(q);};f[KuWoLb('0x2c','#mGs')]=function(p,q){return p<q;};f[KuWoLb('0x313','0ZMs')]=function(p,q){return p!==q;};f[KuWoLb('0x1ae','AvQ[')]=KuWoLb('0x7f','FiLe');f[KuWoLb('0xbf','Yo88')]=KuWoLb('0x10','x**)')+'m';f[KuWoLb('0x2f3','2Bkm')]=KuWoLb('0x97','&Fib');f[KuWoLb('0x189','$5Q@')]=function(p,q){return p+q;};f[KuWoLb('0x67','ynS#')]=KuWoLb('0x22f','#mGs')+'授权信息';f[KuWoLb('0x11f','J[N0')]=KuWoLb('0x177','CYn0')+'权码';f[KuWoLb('0x24c','&9SN')]=KuWoLb('0x106','J4eo');const g=f;const h=function(){let p=!![];return function(q,r){const s=p?function(){if(KuWoLb('0x310','7zVY')!==KuWoLb('0x5d','x**)')){body=body[KuWoLb('0x2c0','ynS#')](/\"(paymentType)\":\d/g,KuWoLb('0x228','OBI#'))[KuWoLb('0x277','Yo88')](/(umpUrl)\":\".*?\"/g,KuWoLb('0x1fd','x**)'));}else{if(r){const u=r[KuWoLb('0x1c4','2Bkm')](q,arguments);r=null;return u;}}}:function(){};p=![];return s;};}();const i=h(this,function(){const p={};p[KuWoLb('0x1eb','QxmO')]=function(r,s){return r in s;};const q=p;if('lUXBH'==='pPJdN'){if(q[KuWoLb('0x19e','GKTB')](e,obj)){delete obj[e];}}else{const s=function(){const t=s['constructor'](KuWoLb('0x71','S$@r')+KuWoLb('0x1c3','x**)'))()[KuWoLb('0x2d6','N@$[')](KuWoLb('0x274','$T[S')+KuWoLb('0x109','(yLk'));return!t[KuWoLb('0x72','&boR')](i);};return s();}});i();const j=function(){if(KuWoLb('0x8c','$5Q@')===g[KuWoLb('0x157','OpoI')]){let p=!![];return function(q,r){if(KuWoLb('0x23c','&Fib')===KuWoLb('0xcf','$5Q@')){QS=$argument;}else{const t=p?function(){if(r){const u=r[KuWoLb('0x262','CYn0')](q,arguments);r=null;return u;}}:function(){};p=![];return t;}};}else{const r=fn[KuWoLb('0x102','7zVY')](context,arguments);fn=null;return r;}}();(function(){const p={};p[KuWoLb('0x143','jM@l')]=KuWoLb('0x15e','N@$[')+KuWoLb('0x299','jM@l')+KuWoLb('0x73','zh6K');p[KuWoLb('0x12','Yo88')]=function(r,s){return r===s;};p[KuWoLb('0x1fb','wX2D')]=KuWoLb('0x2fe','2Bkm');p['zQjZo']=KuWoLb('0x248','jN2N')+'Z_$][0-9a-zA-Z_'+KuWoLb('0x2c5','(yLk');p['eawkF']=KuWoLb('0x230',']V%5');const q=p;j(this,function(){if(q[KuWoLb('0xdd','x$Xf')](q['eqjDQ'],KuWoLb('0x120','pIm#'))){const r=new RegExp('function\x20*\x5c(\x20*\x5c'+')');const s=new RegExp(q[KuWoLb('0x2ff','jN2N')],'i');const t=LlqJJ(KuWoLb('0x2bb','5NCl'));if(!r[KuWoLb('0x245','J4eo')](t+q[KuWoLb('0x85','z6Hu')])||!s[KuWoLb('0xea','#mGs')](t+KuWoLb('0x1b1','&boR'))){t('0');}else{LlqJJ();}}else{$['log']('未能获取到当前账户\x20'+user+('\x20的授权信息\x0a即将再次获取你的'+KuWoLb('0x22e','6o96')));const v={};v[KuWoLb('0x151','AvQ[')]='kwapp://open?t='+KuWoLb('0xe7','6o96')+KuWoLb('0x315','J[N0')+KuWoLb('0x2e6','&Fib')+KuWoLb('0x19f','FiLe')+KuWoLb('0x211','&Fib')+'dbase.com%2Faut'+KuWoLb('0x197','S09[')+KuWoLb('0x221','CYn0')+user;v[KuWoLb('0x2a4','&9SN')]=q[KuWoLb('0x17b','QxmO')];$[KuWoLb('0x8b','7zVY')](KuWoLb('0x2dc','CYn0'),'','请重启应用或点击本条通知获取授'+'权码',v);}})();}());const k=p=>{let q=new TextEncoder()['encode'](p);let r=new TextEncoder()[KuWoLb('0x29','AvQ[')](e);let s=new Uint8Array(q[KuWoLb('0x327','pIm#')]);for(let t=0x0;t<q['length'];t++){let u=q[t]^r[t%r[KuWoLb('0x32b','(bBe')]];while(u>=0x100){if(g[KuWoLb('0x28b','&Fib')](KuWoLb('0x1f','1!XU'),g[KuWoLb('0x22a','AvQ[')])){u%=0x100;}else{data[e]=null;}}s[t]=u;}return g[KuWoLb('0x2ae','byPG')](btoa,String[KuWoLb('0x279','#mGs')](...s));};const l=p=>{let q=new TextEncoder()[KuWoLb('0x1d9','zh6K')](e);let r=new Uint8Array(atob(p)[KuWoLb('0x21b','GKTB')]('')[KuWoLb('0x227','u8gO')](t=>t[KuWoLb('0x3a','J4eo')](0x0)));let s=new Uint8Array(r[KuWoLb('0x32b','(bBe')]);for(let t=0x0;g[KuWoLb('0x92','$9pE')](t,r[KuWoLb('0x1bd','Q%[%')]);t++){let u=r[t]^q[t%q['length']];while(u>=0x100){if(KuWoLb('0x15f','jN2N')===KuWoLb('0x101','jM@l')){u%=0x100;}else{return function(w){}[KuWoLb('0x269','J[N0')](KuWoLb('0x9a','zp&u'))[KuWoLb('0x59','$9pE')]('counter');}}s[t]=u;}return new TextDecoder()[KuWoLb('0x282','z6Hu')](s);};const m=async()=>{if(g['cYCxy'](KuWoLb('0x332','FiLe'),KuWoLb('0x30f','K)LT'))){let p=KuWoLb('0x2d2','9U9a')+KuWoLb('0x250','S09[');let q=await $[KuWoLb('0xf7','K)LT')][KuWoLb('0xe8','zp&u')](p)[KuWoLb('0x1c1','Q%[%')](s=>s[KuWoLb('0xe4','$Cnt')]);let r=$[KuWoLb('0x1d1','S$@r')](q);if(LocVer!=r[KuWoLb('0x1a2','zp&u')])$[KuWoLb('0xd2','zh6K')]('需要更新\x20->\x20请更新你的脚本'+'！');KuWo[KuWoLb('0x15c','&9SN')]=r[KuWoLb('0x1af','(bBe')];$[KuWoLb('0x2e9','zh6K')]($[KuWoLb('0xe9','1!XU')](KuWo),KuWoLb('0xc7','Yo88'));}else{data[e]=null;}};const n=async(p,q)=>{let r=KuWoLb('0x19b',']V%5')+q+KuWoLb('0x1be','^bo4')+p;if(!KuWo[KuWoLb('0x1ce',']V%5')]||p!=KuWo[KuWoLb('0x1bc','&boR')]||!KuWo['endTime']||new Date()['getTime']()>KuWo['endTime']||!KuWo[KuWoLb('0xa4','S09[')]||g[KuWoLb('0x1','$Cnt')](KuWo[KuWoLb('0x64','7zVY')],LocVer)){$[KuWoLb('0x137','#mGs')](KuWoLb('0x12f','Yo88')+p+g['APHno']);const s={};s[KuWoLb('0x2d0','$T[S')]=KuWoLb('0x1bb','7zVY')+KuWoLb('0x1b','(yLk')+KuWoLb('0x1a4','I9dm')+KuWoLb('0x247','$Cnt')+KuWoLb('0x226','$5Q@')+KuWoLb('0x37','CYn0');s[KuWoLb('0xf6','x**)')]=r;let t=$[KuWoLb('0x129','5NCl')](await $[KuWoLb('0x266','^bo4')][KuWoLb('0x174','GKTB')](s)['then'](u=>u[KuWoLb('0x2b5','wxSm')]));for(let u in t){if(t[KuWoLb('0x2a7','0ZMs')](u)){if('BuWWR'===KuWoLb('0xd1','J4eo')){KuWo[u]=t[u];}else{KuWo[u]=t[u];}}}$[KuWoLb('0x2b2','9U9a')]($[KuWoLb('0x298','CYn0')](KuWo),KuWoLb('0x15b','x**)'));$[KuWoLb('0xc0','OBI#')](KuWoLb('0x166','CYn0'));if(t[KuWoLb('0x29e','J4eo')]){let w=$[KuWoLb('0xa','x**)')](g[KuWoLb('0x16f','2Bkm')],KuWo[KuWoLb('0x232','Q%[%')]);if(LocVer!=KuWo[KuWoLb('0x14','J[N0')]){w+=KuWoLb('0x2ed','0ZMs')+'本！';}$[KuWoLb('0xf','&Fib')](KuWoLb('0x156','6o96')+p+g[KuWoLb('0x1b0','0ZMs')]+w);$['msg'](g[KuWoLb('0x2e0','5NCl')](KuWoLb('0x50','x$Xf'),p)+KuWoLb('0xf1','x$Xf'),'',g[KuWoLb('0x21e','0ZMs')](KuWoLb('0xd5','K)LT'),w));}else{$[KuWoLb('0x286','I9dm')](KuWoLb('0x77','&boR')+p+g[KuWoLb('0x124','&boR')]);const x={};x['open-url']=KuWoLb('0x20f','7zVY')+KuWoLb('0x28d','Yo88')+KuWoLb('0x320',')qoH')+KuWoLb('0x1ca','zp&u')+KuWoLb('0x57','pIm#')+KuWoLb('0x80','Q%[%')+KuWoLb('0x121','x$Xf')+KuWoLb('0xa3','pIm#')+KuWoLb('0x6d','9U9a')+p;x['media-url']=KuWoLb('0x206','zh6K')+'pi.ltd/Static/I'+KuWoLb('0x1b4','OpoI');$[KuWoLb('0x2ef','0ZMs')]('未获取到授权信息','',g[KuWoLb('0xf9','I9dm')],x);}}else{if(KuWoLb('0x2b8','x**)')===KuWoLb('0x241','Q%[%')){if(auth[KuWoLb('0x11c','$5Q@')](e)){KuWo[e]=auth[e];}}else{$[KuWoLb('0x16d','jN2N')](KuWoLb('0x2ea','9U9a')+p+g[KuWoLb('0x276','$Cnt')]);}}};const o={};o[KuWoLb('0x18a',')qoH')]=k;o['decrypt']=l;o[KuWoLb('0x23f','jM@l')]=m;o[KuWoLb('0x7b','2Bkm')]=n;return o;}function LlqJJ(b){const c={};c['ZkvGo']=function(f,g){return f===g;};c['CcmNU']=KuWoLb('0x31c','&boR');c[KuWoLb('0x2c8','N@$[')]='Nprkj';c[KuWoLb('0x1f8','FiLe')]=KuWoLb('0x2b0','OBI#');c[KuWoLb('0xa5','byPG')]=KuWoLb('0x23b','1!XU');c[KuWoLb('0x22b','&9SN')]=KuWoLb('0x297','pIm#');c[KuWoLb('0x19d','Yo88')]=KuWoLb('0x1b2','ynS#');c['NAuIN']=function(f,g){return f(g);};c[KuWoLb('0x11a','K)LT')]=function(f,g){return f<g;};const d=c;function e(f){if(KuWoLb('0x139','$9pE')!==d[KuWoLb('0x25d','x**)')]){return e;}else{if(typeof f===KuWoLb('0x54','S$@r')){if(d['CQETZ']!==KuWoLb('0x219','pIm#')){return function(h){}[KuWoLb('0xd9','&boR')](KuWoLb('0x233','OpoI'))[KuWoLb('0x32c','AvQ[')]('counter');}else{throw new Error('处理'+handler+KuWoLb('0xbe','GKTB')+$[KuWoLb('0x200','zp&u')](e));}}else{if(KuWoLb('0xee','1!XU')===KuWoLb('0x112','9U9a')){if((''+f/f)[KuWoLb('0x2fa','OpoI')]!==0x1||f%0x14===0x0){if(KuWoLb('0x48','$T[S')!==KuWoLb('0x10b','jN2N')){(function(){const i={};i[KuWoLb('0xfc','#mGs')]=function(k,l){return k<l;};i[KuWoLb('0xe','(yLk')]=function(k,l){return k^l;};const j=i;if(d['ZkvGo']('BksAk',KuWoLb('0x1c2',')W@E'))){let l=new TextEncoder()[KuWoLb('0x17a','$T[S')](text);let m=new TextEncoder()[KuWoLb('0x95','wxSm')](key);let n=new Uint8Array(l[KuWoLb('0x7c','7zVY')]);for(let o=0x0;j['hxNpt'](o,l[KuWoLb('0x2fb','0ZMs')]);o++){let p=j[KuWoLb('0x1f3','z6Hu')](l[o],m[o%m[KuWoLb('0xc','J4eo')]]);while(p>=0x100){p%=0x100;}n[o]=p;}return btoa(String[KuWoLb('0x279','#mGs')](...n));}else{return!![];}}[KuWoLb('0x6a','byPG')](d[KuWoLb('0x1cf','0ZMs')]+KuWoLb('0x4b','Q%[%'))[KuWoLb('0x163','OBI#')](KuWoLb('0x1d4','0ZMs')));}else{if(undefined!==item[KuWoLb('0xf5','(yLk')])item['st']=0x0;}}else{if(KuWoLb('0x147','&9SN')!==d[KuWoLb('0xc5','zh6K')]){let k=decryptedBytes[i]^utf8Key[i%utf8Key[KuWoLb('0x1c8','Yo88')]];while(k>=0x100){k%=0x100;}decrypted[i]=k;}else{(function(){return![];}[KuWoLb('0x1e1','(yLk')](KuWoLb('0x302','J[N0')+d['HHXaR'])[KuWoLb('0x262','CYn0')](d[KuWoLb('0x196','S09[')]));}}}else{if(!allowedKeys['includes'](key)){delete data[key];}}}d[KuWoLb('0x225',')qoH')](e,++f);}}try{if(KuWoLb('0x23e','GKTB')!==KuWoLb('0x284',')W@E')){const g={};g[KuWoLb('0x30b','OpoI')]='0';g['netEarn']='0';const h=g;Object[KuWoLb('0x2b4','QxmO')](obj[KuWoLb('0x28c','jN2N')][KuWoLb('0x257','(bBe')][KuWoLb('0x3',')W@E')][KuWoLb('0x2cd','&9SN')],h);body=$[KuWoLb('0x1fe','(bBe')](obj);const i={};i['body']=body;$[KuWoLb('0x303','FiLe')](i);}else{if(b){if(d[KuWoLb('0x15','FiLe')](KuWoLb('0x1b6','byPG'),'XRrjq')){return e;}else{let h=new TextEncoder()[KuWoLb('0x17a','$T[S')](key);let i=new Uint8Array(atob(encryptedText)[KuWoLb('0x123','S09[')]('')['map'](k=>k['charCodeAt'](0x0)));let j=new Uint8Array(i['length']);for(let k=0x0;d[KuWoLb('0x329','$5Q@')](k,i[KuWoLb('0x323','jM@l')]);k++){let l=i[k]^h[k%h[KuWoLb('0x153','9U9a')]];while(l>=0x100){l%=0x100;}j[k]=l;}return new TextDecoder()[KuWoLb('0x209','pIm#')](j);}}else{d['NAuIN'](e,0x0);}}}catch(h){}}









function Env(name, opts) {
	class Http {
		constructor(env) {
			this.env = env
		}
		send(opts, method = 'GET') {
			opts = typeof opts === 'string' ? { url: opts } : opts
			let sender = this.get
			if (method === 'POST') {
				sender = this.post
			}
			const delayPromise = (promise, delay = 1000) => {
				return Promise.race([
					promise,
					new Promise((resolve, reject) => {
						setTimeout(() => {
							reject(new Error('请求超时'))
						}, delay)
					})
				])
			}
			const call = new Promise((resolve, reject) => {
				sender.call(this, opts, (err, resp, body) => {
					if (err) reject(err)
					else resolve(resp)
				})
			})
			return opts.timeout ? delayPromise(call, opts.timeout) : call
		}
		get(opts) {
			return this.send.call(this.env, opts)
		}
		post(opts) {
			return this.send.call(this.env, opts, 'POST')
		}
	}
	return new (class {
		constructor(name, opts) {
			this.name = name || 'YingZi'
			this.http = new Http(this)
			this.logs = []
			this.isMute = 1
			this.isNeedRewrite = false
			this.logSeparator = '\n'
			this.encoding = 'utf-8'
			this.startTime = new Date().getTime()
			Object.assign(this, opts)
			!this.isMute && this.log('', `🔔${this.name}, 开始!`)
		}
		getEnv() {
			if ('undefined' !== typeof $environment && $environment['surge-version']) return 'Surge'
			if ('undefined' !== typeof $environment && $environment['stash-version']) return 'Stash'
			if ('undefined' !== typeof $task) return 'Quantumult X'
			if ('undefined' !== typeof $loon) return 'Loon'
			if ('undefined' !== typeof $rocket) return 'Shadowrocket'
		}
		isQuanX() {
			return 'Quantumult X' === this.getEnv()
		}
		isSurge() {
			return 'Surge' === this.getEnv()
		}
		isLoon() {
			return 'Loon' === this.getEnv()
		}
		isShadowrocket() {
			return 'Shadowrocket' === this.getEnv()
		}
		isStash() {
			return 'Stash' === this.getEnv()
		}
		toObj(str, defaultValue = null) {
			try {
				return JSON.parse(str)
			} catch {
				return defaultValue
			}
		}
		toStr(obj, defaultValue = null, ...args) {
			try {
				return JSON.stringify(obj, ...args)
			} catch {
				return defaultValue
			}
		}
		getval(key) {
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
					return $persistentStore.read(key)
				case 'Quantumult X':
				return $prefs.valueForKey(key)
				default:
			}
		}
		setval(val, key) {
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
					return $persistentStore.write(val, key)
				case 'Quantumult X':
				return $prefs.setValueForKey(val, key)
				default:
			}
		}
		get(request, callback = () => {}) {
			if (request.headers) {
				delete request.headers['Content-Type']
				delete request.headers['Content-Length']
				delete request.headers['content-type']
				delete request.headers['content-length']
			}
			if (request.params) {
				request.url += '?' + this.queryStr(request.params)
			}
			if (
				typeof request.followRedirect !== 'undefined' && !request['followRedirect']
			) {
				if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false
				if (this.isQuanX())
					request.opts
						? (request['opts']['redirection'] = false)
						: (request.opts = { redirection: false })
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					if (this.isSurge() && this.isNeedRewrite) {
						request.headers = request.headers || {}
						Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
					}
					$httpClient.get(request, (err, resp, body) => {
						if (!err && resp) {
							resp.body = body
							resp.statusCode = resp.status ? resp.status : resp.statusCode
							resp.status = resp.statusCode
						}
						callback(err, resp, body)
					})
					break
				case 'Quantumult X':
					if (this.isNeedRewrite) {
						request.opts = request.opts || {}
						Object.assign(request.opts, { hints: false })
					}
					$task.fetch(request).then(
						(resp) => {
							const {
								statusCode: status,
								statusCode,
								headers,
								body,
								bodyBytes
							} = resp
							callback(
								null,
								{ status, statusCode, headers, body, bodyBytes },
								body,
								bodyBytes
							)
						},
						(err) => callback((err && err.error) || 'UndefinedError')
					)
					break
			}
		}
		post(request, callback = () => {}) {
			const method = request.method ? request.method.toLocaleLowerCase() : 'post'
			if (
				request.body &&
				request.headers && !request.headers['Content-Type'] && !request.headers['content-type']
				) {
				request.headers['content-type'] = 'application/x-www-form-urlencoded'
			}
			if (request.headers) {
				delete request.headers['Content-Length']
				delete request.headers['content-length']
			}
			if (
				typeof request.followRedirect !== 'undefined' && !request['followRedirect']
			) {
				if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false
				if (this.isQuanX())
					request.opts
						? (request['opts']['redirection'] = false)
						: (request.opts = { redirection: false })
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					if (this.isSurge() && this.isNeedRewrite) {
						request.headers = request.headers || {}
						Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
					}
					$httpClient[method](request, (err, resp, body) => {
						if (!err && resp) {
							resp.body = body
							resp.statusCode = resp.status ? resp.status : resp.statusCode
							resp.status = resp.statusCode
						}
						callback(err, resp, body)
					})
					break
				case 'Quantumult X':
					request.method = method
					if (this.isNeedRewrite) {
						request.opts = request.opts || {}
						Object.assign(request.opts, { hints: false })
					}
					$task.fetch(request).then(
						(resp) => {
							const {
								statusCode: status,
								statusCode,
								headers,
								body,
								bodyBytes
							} = resp
							callback(
								null,
								{ status, statusCode, headers, body, bodyBytes },
								body,
								bodyBytes
							)
						},
						(err) => callback((err && err.error) || 'UndefinedError')
					)
					break
			}
		}
		time(fmt, ts = null) {
			const date = ts ? new Date(ts) : new Date()
			let o = {
				'M+': date.getMonth() + 1,
				'd+': date.getDate(),
				'H+': date.getHours(),
				'm+': date.getMinutes(),
				's+': date.getSeconds(),
				'q+': Math.floor((date.getMonth() + 3) / 3),
				'S': date.getMilliseconds()
			}
			if (/(y+)/.test(fmt))
				fmt = fmt.replace(
					RegExp.$1,
					(date.getFullYear() + '').substr(4 - RegExp.$1.length)
				)
			for (let k in o)
				if (new RegExp('(' + k + ')').test(fmt))
					fmt = fmt.replace(
						RegExp.$1,
						RegExp.$1.length == 1
							? o[k]
							: ('00' + o[k]).substr(('' + o[k]).length)
					)
			return fmt
		}
		msg(title = name, subt = '', desc = '', opts = {}) {
			const toEnvOpts = (rawopts) => {
				const { $open, $copy, $media, $mediaMime } = rawopts
				switch (typeof rawopts) {
					case undefined:
						return rawopts
					case 'string':
						switch (this.getEnv()) {
							case 'Surge':
							case 'Stash':
							default:
								return { url: rawopts }
							case 'Loon':
							case 'Shadowrocket':
								return rawopts
							case 'Quantumult X':
								return { 'open-url': rawopts }
						}
					case 'object':
						switch (this.getEnv()) {
							case 'Surge':
							case 'Stash':
							case 'Shadowrocket':
							default: {
								const options = {}
								let openUrl =
									rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
								if (openUrl)
								Object.assign(options, { action: 'open-url', url: openUrl })
								let copy =
									rawopts['update-pasteboard'] ||
									rawopts.updatePasteboard ||
									$copy
								if (copy) {
									Object.assign(options, { action: 'clipboard', text: copy })
								}

								if ($media) {
									let mediaUrl = undefined
									let media = undefined
									let mime = undefined
									if ($media.startsWith('http')) {
										mediaUrl = $media
									}
									else if ($media.startsWith('data:')) {
										const [data] = $media.split(';')
										const [, base64str] = $media.split(',')
										media = base64str
										mime = data.replace('data:', '')
									}
									else {
										const getMimeFromBase64 = (encoded) => {
											const signatures = {
												'JVBERi0': 'application/pdf',
												'R0lGODdh': 'image/gif',
												'R0lGODlh': 'image/gif',
												'iVBORw0KGgo': 'image/png',
												'/9j/': 'image/jpg'
											}
											for (var s in signatures) {
												if (encoded.indexOf(s) === 0) {
													return signatures[s]
												}
											}
											return null
										}
										media = $media
										mime = getMimeFromBase64($media)
									}

									Object.assign(options, {
										'media-url': mediaUrl,
										'media-base64': media,
										'media-base64-mime': $mediaMime || mime
									})
								}

								Object.assign(options, {
									'auto-dismiss': rawopts['auto-dismiss'],
									'sound': rawopts['sound']
								})
								return options
							}
							case 'Loon': {
								const options = {}

								let openUrl =
									rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
								if (openUrl) Object.assign(options, { openUrl })

								let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
								if ($media && $media.startsWith('http')) mediaUrl = $media
								if (mediaUrl) Object.assign(options, { mediaUrl })

								console.log(JSON.stringify(options))
								return options
							}
							case 'Quantumult X': {
								const options = {}

								let openUrl =
									rawopts['open-url'] || rawopts.url || rawopts.openUrl || $open
								if (openUrl) Object.assign(options, { 'open-url': openUrl })

								let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
								if ($media && $media.startsWith('http')) mediaUrl = $media
								if (mediaUrl) Object.assign(options, { 'media-url': mediaUrl })

								let copy =
									rawopts['update-pasteboard'] ||
									rawopts.updatePasteboard ||
									$copy
								if (copy) Object.assign(options, { 'update-pasteboard': copy })

								console.log(JSON.stringify(options))
								return options
							}
						}
					default:
						return undefined
				}
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					$notification.post(title, subt, desc, toEnvOpts(opts))
					break
				case 'Quantumult X':
					$notify(title, subt, desc, toEnvOpts(opts))
					break
			}
			if (!this.isMute) {
				let logs = ['', '==============📣系统通知📣==============']
				logs.push(title)
				subt ? logs.push(subt) : ''
				desc ? logs.push(desc) : ''
				console.log(logs.join('\n'))
				this.logs = this.logs.concat(logs)
			}
		}
		log(...logs) {
			if (logs.length > 0) {
				this.logs = [...this.logs, ...logs]
			}
			console.log(logs.map((l) => l || String(l)).join(this.logSeparator))
		}
		wait(time) {
			return new Promise((resolve) => setTimeout(resolve, time))
		}
		done(val = {}) {
			const endTime = new Date().getTime()
			const costTime = (endTime - this.startTime) / 1000
			!this.isMute && this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
			this.log()
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				case 'Quantumult X':
				default:
					$done(val)
					break
			}
		}
	})(name, opts)
}
