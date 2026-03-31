let command = prompt("コマンドを代入してください（new, list, delete, quit");
let toDos = [];

while (command !== "quit" && command !== "q") {
    if (command === "list") {
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i}:${toDos[i]}`);
        }
    } else if (command === "new") {
        const newToDo = prompt("新しいToDoを入力してください。");
        toDos.push(newToDo);
        console.log(`「${newToDo}」を追加しました。`)
    } else if (command === "delete") {
        const index = prompt("削除するToDoのインデックスを入力してください。");
        let deletedToDo = toDos.splice(index, 1);
        console.log(`「${deletedToDo}」を削除しました。`);
    }
    command = prompt("コマンドを代入してください（new, list, delete, quit");
}

console.log("アプリを修了しました。");