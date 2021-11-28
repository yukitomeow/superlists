/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */
function hasFun(words) {
    // ここにコードを書きましょう
    let result = false
    for (const word of words) {
        if (word === "fun") {
            result = true;
        }
    }
    return result;
}

let actual = hasFun(["whatever", 2, false, "fun", "hello"]);
let expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
