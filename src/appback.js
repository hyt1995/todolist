// import React from 'react';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       tasks:[],
//       task:''
//     }
//     this.changehandler=this.changehandler.bind(this)
//     this.onclickhandler=this.onclickhandler.bind(this)
//   }

//   changehandler(e){
//     this.setState({
//       task:e.target.value
//     })
//   }
//   //콜에피아이로 주소에서 데이터를 불러와 바디를 리턴함으로써 디드 마운틴에서 테스크스에 넣어준다는것
//   componentDidMount(){
//     this.callapi().then(res=>this.setState({tasks:res}))
//   }

//   callapi = async () =>{
//     const response = await fetch('/api/massage');
//     const body = await response.json();
//     return body;
//   }

//   onclickhandler(e){
//     e.preventDefault();
//     const task ={todo:this.state.task};
//     const tasks = [...this.state.tasks,task]
//     this.setState({
//       tasks,
//       task:''
//     })
//   }

//   pushhandler(){
//     window.fetch("http://localhost:5000/",{
//       method: 'POST',
//       body: JSON.stringify(this.state.task),
//       headers: {
//         "Content-Type": "application/json",
//       }
//     }).then(response => {
//       return response.json();
//     }).then(json => {
//       console.log(json);
//       // message sent!
//     });
//   }


//   deletehandler(idx){
//     const tasks = this.state.tasks.filter((task,i)=>i!== idx)
//     this.setState({tasks});
//   }
  
// //몰랐는데 value={this.state.task}이 역할은 제출이 되면 초기화된 task값을 가져오므로 다시 빈공간으로 만들기 위한 값이 어따!!
//   render(){

//     const display = this.state.tasks.map((item,i)=>{//나중에 this.state.tasks로 바궈야한다
//       return(
//         <div key={i} >
//           <p>{item.todo}</p>
//           <button onClick ={()=>this.deletehandler(i)}>삭제</button>
//         </div>
//       )
//     })

//     return(// 나중에 로딩으로 구현을 하려면 admin참고해서 할 것
//       <div>
//         <form> 
//         <input type='text' value={this.state.task} placeholder='입력하시오' onChange={this.changehandler} />
//         <button onClick={this.onclickhandler}>제출</button>
//         </form>
//         <div>{display}</div>
//       </div>
//     )
//   }
// }

// export default App;


// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       tasks:[],
//       task:''
//     }
//     this.changehandler=this.changehandler.bind(this)
//     this.onclickhandler=this.onclickhandler.bind(this)
//     this.pushhandler=this.pushhandler.bind(this)
//   }

//   changehandler(e){
//     this.setState({
//       task:e.target.value
//     })
//   }
//   //콜에피아이로 주소에서 데이터를 불러와 바디를 리턴함으로써 디드 마운틴에서 테스크스에 넣어준다는것
//   // componentDidMount(){
//   //   this.callapi().then(res=>this.setState({tasks:res}))
//   // }

//   // callapi = async () =>{
//   //   const response = await fetch('/api/massage');
//   //   const body = await response.json();
//   //   return body;
//   // }

//   onclickhandler(e){
//     e.preventDefault();
//     const task ={todo:this.state.task};
//     const tasks = [...this.state.tasks,task]
//     this.setState({
//       tasks,
//       task:''
//     })
//   }

//   pushhandler(){
//     window.fetch("http://localhost:5000/api/massage",{
//       method: 'POST',
//       body: JSON.stringify(this.state.tasks),
//       headers: {
//         "Content-Type": "application/json",
//       }
//     }).then(response => {
//       return response.json();
//     }).then(json => {
//       console.log(json);
//       // message sent!
//     });
//   }


//   deletehandler(idx){
//     const tasks = this.state.tasks.filter((task,i)=>i!== idx)
//     this.setState({tasks});
//   }
  
// //몰랐는데 value={this.state.task}이 역할은 제출이 되면 초기화된 task값을 가져오므로 다시 빈공간으로 만들기 위한 값이 어따!!
//   render(){

//     const display = this.state.tasks.map((item,i)=>{//나중에 this.state.tasks로 바궈야한다
//       return(
//         <div key={i} >
//           <p>{item.todo}</p>
//           <button onClick ={()=>this.deletehandler(i)}>삭제</button>
//         </div>
//       )
//     })

//     return(// 나중에 로딩으로 구현을 하려면 admin참고해서 할 것
//       <div>
//         <form> 
//         <input type='text' value={this.state.task} placeholder='입력하시오' onChange={this.changehandler} />
//         <button onClick={this.onclickhandler}>제출</button>
//         </form>
//         <div>{display}</div>
//       </div>
//     )
//   }
// }



//여기가 하고 있는 중인 앱
// import React from 'react';
// import './App.css';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       tasks:[],
//       task:'',
//       filtermap:'',
//       filterlist:[]
//     }
//     this.changehandler=this.changehandler.bind(this)
//     this.onclickhandler=this.onclickhandler.bind(this)
//     this.changehandler1=this.changehandler1.bind(this)
//     this.filterhandler=this.filterhandler.bind(this)
//   }

//   changehandler(e){
//     this.setState({
//       task:e.target.value
//     })
//   }

//   changehandler1(e){
//     this.setState({
//       filtermap:e.target.value
//     })
//   }

//   onclickhandler(e){
//     e.preventDefault();
//     const task = {todo:this.state.task};
//     const tasks = [...this.state.tasks,task]/// ...은 전에꺼를 저장하기 위한 것이다.
//     this.setState({
//       tasks,
//       task:''
//     })
//   }

//   filterhandler(e){
//     e.preventDefault();
//     const filterlist = this.state.tasks.filter(task => task.todo === this.state.filtermap)
//     this.setState({
//       filtermap:'',
//       filterlist
//     })
//   }

//   deletehandler(idx){
//     const tasks = this.state.tasks.filter((task,i)=>i!== idx)
//     this.setState({tasks});
//   }
  
// //몰랐는데 value={this.state.task}이 역할은 제출이 되면 초기화된 task값을 가져오므로 다시 빈공간으로 만들기 위한 값이 어따!!
//   render(){

//     const filtermaps = this.state.filterlist.map(item=>{
//       return <div>{item.todo}</div>
//     })

//     const display = this.state.tasks.map((item,i)=>{//나중에 this.state.tasks로 바궈야한다
//       return(
//         <div key={i} >
//           <p>{item.todo}</p>
//           <button onClick ={()=>this.deletehandler(i)}>삭제</button>
//         </div>
//       )
//     })

//     return(// 나중에 로딩으로 구현을 하려면 admin참고해서 할 것
//       <div id='line'>
//         <form id='right'> 
//         <input type='text' value={this.state.task} placeholder='입력하시오' onChange={this.changehandler} />
//         <button onClick={this.onclickhandler}>제출</button>
//         </form>
//         <div id="list">{display}</div>
//         <form id="left">
//         <input type='search' value={this.state.filtermap} placeholder='뭘 검색할건디' onChange={this.changehandler1} />
//         <button onClick={this.filterhandler}>검색</button>
//         <div id='line1'>{filtermaps}</div>
//         </form>
//         <input type='search' />
//       </div>
//     )
//   }
// }

// export default App;
