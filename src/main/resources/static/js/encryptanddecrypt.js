/*****************************************************
 * AES加密
 * @param content 加密内容
 * @param key 加密密码，由字母或数字组成
 　　　　　　此方法使用AES-128-ECB加密模式，key需要为16位
 　　　　　　加密解密key必须相同，如：abcd1234abcd1234
 * @return 加密密文
 ****************************************************/

function encrypt(word){
    var key = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12");
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
}

/*****************************************************
 * AES解密
 * @param content 加密密文
 * @param key 加密密码，由字母或数字组成
 　　　　　　此方法使用AES-128-ECB加密模式，key需要为16位
 　　　　　　加密解密key必须相同，如：abcd1234abcd1234
 * @return 解密明文
 ****************************************************/

function decrypt(word){
    var key = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12");
    var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}