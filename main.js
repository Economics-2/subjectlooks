const {app,BrowserWindow}=require('electron');
app.whenReady().then(()=>{const w=new BrowserWindow({width:480,height:900,autoHideMenuBar:true,webPreferences:{autoplayPolicy:'no-user-gesture-required'}});w.loadFile('index.html')});
app.on('window-all-closed',()=>app.quit());
