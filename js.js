//去掉前后空格
function strip(x) {
    while (x.length > 0 && x.charAt(0) == ' ')
        x = x.substring(1, x.length);
    while (x.length > 0 && x.charAt(x.length - 1) == ' ')
        x = x.substring(0, x.length - 1);
    return x;
}
//非空验证
function isNull(elem, message) {
    var va = strip(elem.value);
    if (va == "") {
        alert(message);
        elem.focus();
        return false;
    }
    return true;
}

//验证账号
function checkName() {
    var first = document.forms[0].Name.value.charAt(0);
    var exp = /^[a-zA-Z0-9]+$/;
    if (isNull(document.forms[0].Name, "账号不能为空，请输入账号！")) {
        if (first >= 'a' && first <= 'z' || first >= 'A' && first <= 'Z') {
        } else {
            alert("登录账号要求以字母开头，请您重新输入！");
            document.forms[0].Name.focus();
            return false;
        }
        if (!exp.test(document.forms[0].Name.value)) {
            alert("账号必须是字母或数字！");
            document.forms[0].Name.focus();
            return false;
        }
        return true;
    } else {
        return false;
    }
}
//验证密码
function checkpw() {
    var exp = /^[A-Za-z0-9]+$/;
    if (isNull(document.forms[0].pw, "密码不能为空，请输入密码！")) {
        if (document.forms[0].pw.value.length <= 8) {
            alert("密码必须大于8位！");
            document.forms[0].pw.focus();
            return false;
        } else {
            if (exp.test(document.forms[0].pw.value)) {
                alert("密码需要包含其他字符!");
                document.forms[0].pw.focus();
                return false;
            }
        }
    } else {
        return false;
    }
    if (document.forms[0].pw.value != document.forms[0].pw1.value) {
        alert("两次密码输入不同!");
        document.forms[0].pw.focus();
        return false;
    }
    return true;
}
//验证姓名
function checkname() {
    var exp = /^[\u4e00-\u9fa5]{2,4}$/i;
    if (isNull(document.forms[0].name, "姓名不能为空，请输入姓名")) {
        if (!exp.test(document.forms[0].name.value)) {
            alert("请输入正确格式的姓名！");
            document.forms[0].name.focus();
            return false;
        }
        return true;
    } else {
        return false;
    }
}

//验证身份证
function checkIdenty() {
    var bir = document.forms[0].birth.value;
    var ide = document.forms[0].identy.value;
    var biride = ide.substring(6, 10) + "-" + ide.substring(10, 12) + "-" + ide.substring(12, 14);
    if (isNull(document.forms[0].identy, "身份证号码不能为空，请输入")) {
        if (ide.length != 18) {
            alert("请输入正确格式的身份证号码（18位）");
            document.forms[0].identy.focus();
            return false;
        } else {
            if (bir != biride) {
                alert("您的身份证信息与生日不符合，请重新输入！");
                document.forms[0].identy.focus();
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

//验证邮编
function checkecode() {
    var exp = /^[0-9]+$/;
    if (isNull(document.forms[0].ecode, "邮编不能为空，请输入")) {
        if (document.forms[0].ecode.value.length != 6) {
            alert("请输入正确格式的邮政编码（6位）");
            document.forms[0].ecode.focus();
            return false;
        } else {
            if (!exp.test(document.forms[0].ecode.value)) {
                alert("邮编为数字");
                document.forms[0].ecode.focus();
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

//验证Email
function checkEmail() {
    var exp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (isNull(document.forms[0].email, "Email不能为空，请输入")) {
        if (!exp.test(document.forms[0].email.value)) {
            alert("Email格式错误！");
            document.forms[0].email.focus();
            return false;
        }
        return true;
    } else {
        return false;
    }
}

//提交按钮
function last() {
    if (checkName() && checkpw() && checkname() && checkIdenty() && checkecode() && checkEmail()) {
        document.forms[0].submit();
        return true;
    }
    return false;
}