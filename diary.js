import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import {
	getFirestore,
	collection,
	addDoc
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
		createdAt : new Date()

	});
	alert("保存完了！");                      
}

window.saveDiary = saveDiary;            





