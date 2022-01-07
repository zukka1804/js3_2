// <!--** 以下Firebase **-->
<script type="module">
    {/* // Import the functions you need from the SDKs you need */}
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
    {/* // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries */}
  
    {/* // Your web app's Firebase configuration */}
    const firebaseConfig = {
      apiKey: "AIzaSyCq3xpfPJL5bmkTCoXXDrGnCzAHTSQ479s",
      authDomain: "chat2-a5807.firebaseapp.com",
      projectId: "chat2-a5807",
      storageBucket: "chat2-a5807.appspot.com",
      messagingSenderId: "247212074218",
      appId: "1:247212074218:web:f9cd26044271e9043c2393"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app); //RealtimeDatabaseを利用する（データベースの接続）
    const dbRef = ref(db,"chat2");//RealtimeDatabase"chat2"を利用する（どのデータベースを参照するか）

    $("#send").on("click",function(){
    const msg = {
        uname: $("#uname").val(),
        text: $("#text").val()
  }
    const newPostRef = push(dbRef); // データを一意なもの（ユニークなもの）にするための記述
    set(newPostRef, msg) // データを保存
});

onChildAdded(dbRef, function(data){
    const msg = data.val();  //jqueryのvalとは違う
    const key = data.key;
    //表示用テキスト・HTMLを作成
    let h = '<p>';
        h += msg.uname;
        h += '<br>';
        h += msg.text;
        h += '</p>';
        $("#output").append(h); //#outputの最後に追加
});

// ---------------------
//outputの大きさを変える
//最も新しいコメントが常に表示されるようにする
// base64  画像を文字列化する
//スタンプ機能

//先生からいただいたもの---------------------------------------
$("#text").on("keydown", function(event){
    if (event.keyCode == 13) {   //EnterKey=13
      const msg = {
        uname: $("#uname").val(),
        text: $("#text").val()
      }
      const newPostRef = push(dbRef); //ユニークKEYを生成
      set(newPostRef, msg);           //"chat"にユニークKEYをつけてオブジェクトデータを登録
    }
console.log(event);
});
//先生からいただいたもの---------------------------------------

    //  if(event.keyCode === 13){
//     const msg = {
//         uname: $("#uname").val(),
//         text: $("#text").val()
//     }
//     const newPostRef = push(dbRef); // データを一意なもの（ユニークなもの）にするための記述
//     set(newPostRef, msg) // データを保存
//  }
    // console.log("event");



    
        // // const msg = {
        // //     const uname = $("#uname").val();
        // //     const text = $("#text").val();
        // // // alert(uname + text);
        // // }
        // const msg = {
        //  umame: $("#uname").val(),
        //  text: $("#text").val(),  
        // }
        // const newPostRef = push(dbRef); //データを一意、唯一のものにするための記述　ユニークなものにする
        // setnewPostRef, msg); //データを保存

    // });

  </script>
