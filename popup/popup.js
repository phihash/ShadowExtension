document.addEventListener("DOMContentLoaded",() => {
  const saveButton = document.getElementById("saveButton");
  const openListButton = document.getElementById("openListButton");
  const resetButton = document.getElementById("resetButton");

  saveButton.addEventListener("click",() => {
    chrome.tabs.query({active:true,currentWindow:true},(tabs) => {
      const currentTab = tabs[0]; //tab全体の情報
      if(!currentTab) return;
      chrome.storage.local.get(["shadowBookmarks"],(results) => {
        let shadowBookmarks = results.shadowBookmarks || [];

        const isAlreadySaved = shadowBookmarks.some((bookmark) => {
           return bookmark.url === currentTab.url;
        });
        if(!isAlreadySaved){
         shadowBookmarks.push({url:currentTab.url,title:currentTab.title});
         chrome.storage.local.set({shadowBookmarks});
        }else{
          alert("すでにこのタブの情報は保存されています");
        }
      });
    });
  });

  openListButton.addEventListener("click",() => {
    chrome.runtime.openOptionsPage();
  });

  resetButton.addEventListener("click",() => {
    const confirmed = confirm("保存しているデータを消去しますか?");
    if(confirmed){
      chrome.storage.local.remove("shadowBookmarks",() => {
        alert("消去しました");
      });
    }
  });
});
