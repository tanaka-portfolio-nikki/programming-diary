import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs
	orderBy
}
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {　　　　　　　　　　　　　　　　　　　　　　　　
    apiKey: "AIzaSyCxm6CZEk7zOYPFv6FC8HE-pDCpdtagXa8",
    authDomain: "firstfirebase-fa9d7.firebaseapp.com",
    projectId: "firstfirebase-fa9d7",
    storageBucket: "firstfirebase-fa9d7.firebasestorage.app",
    messagingSenderId: "137348827756",
    appId: "1:137348827756:web:33e34e0594b6c16ff52649"
  };

const app = initializeApp(firebaseConfig);      

const db = getFirestore(app);                                 

console.log("Firebase接続成功");                                

async function saveDiary() {                                       
	const title =
	  document.getElementById("diaryTitle").value;　　　　　
	const content = 
	  document.getElementById("diaryContent").value;

	await addDoc(collection(db,"diaries"),{                  
		title : title,
		content : content,
		createdAt : serverTimestamp()

	});
	alert("保存完了！");        
	loadDiaries();              
}

async function loadDiaries() {
	console.log("loadDiaries開始")
	const diaryList = 
	  document.getElementById("diaryList");
	  diaryList.innerHTML = "";

    const q = query(
    	collection(db, "diaries"),
    	orderBy("createdAt", "desc")
    	);

	const querySnapshot = 
	  await getDocs(collection(db, "diaries"));
	console.log("件数：", querySnapshot.size);
	querySnapshot.forEach((doc) => {
		const data = doc.data();

		diaryList.innerHTML += `
		<div>
		  <h3>${data.title}</h3>
		  <small>
			${data.createdAt.toDate().toLocaleString("ja-JP")}
		  </small>
		  <p>${data.content}</p>
		  <hr>
		</div>
		`;
	});
}

window.saveDiary = saveDiary;            
loadDiaries();





