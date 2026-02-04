# APP 頁面結構

使用 Mermaid 流程圖標示 App 的頁面導航結構。

> [!NOTE]
> 請使用支援 Mermaid 預覽的編輯器查看。

```mermaid
graph LR
    classDef level1 fill:#f97316,stroke:none,color:white;
    classDef level2 fill:#0d9488,stroke:none,color:white;
    classDef level3 fill:#8b5cf6,stroke:none,color:white;
    classDef level4 fill:#ec4899,stroke:none,color:white;

    %% ------------------------------
    %% Level 1: App Entry & Main Tabs
    %% ------------------------------
    Entry[App 啟動]:::level1
    Splash[啟動頁/引導頁]:::level2
    Auth[認證流程]:::level2
    Main[主畫面 (TabBar)]:::level1

    Entry --> Splash
    Splash --> Auth
    Auth --> Main

    %% ------------------------------
    %% Auth Flow
    %% ------------------------------
    Login[登入]:::level3
    Register[註冊]:::level3
    ForgotPwd[忘記密碼]:::level3
    
    Auth -->|已有帳號| Login
    Auth -->|新用戶| Register
    Login --> ForgotPwd

    %% ------------------------------
    %% Main Tabs
    %% ------------------------------
    Home[首頁 (Feed)]:::level2
    Discovery[發現]:::level2
    Live[直播]:::level2
    Post[發布 (Create)]:::level2
    Profile[我的]:::level2

    Main --> Home
    Main --> Discovery
    Main --> Live
    Main --> Post
    Main --> Profile

    %% ------------------------------
    %% Home Tab Details (Updated)
    %% ------------------------------
    RecAnchor[主播推薦]:::level3
    RecFeed[首頁推薦]:::level3
    ForYou[為你推薦 (分類)]:::level3
    Notifications[通知]:::level3
    
    Home --> RecAnchor
    Home --> RecFeed
    Home --> ForYou
    Home --> Notifications

    %% ------------------------------
    %% Discovery Tab Details
    %% ------------------------------
    Topics[多樣化話題]:::level3
    Events[熱門活動]:::level3
    
    Discovery --> Topics
    Discovery --> Events

    %% ------------------------------
    %% Live Tab Details [NEW]
    %% ------------------------------
    WatchLive[觀看直播]:::level3
    Danmaku[彈幕互動]:::level4
    Gift[送禮]:::level4
    
    Live --> WatchLive
    WatchLive --> Danmaku
    WatchLive --> Gift

    %% ------------------------------
    %% Post Flow
    %% ------------------------------
    CreatePost[創建帖子]:::level3
    AddTag[添加話題標籤]:::level3
    
    Post --> CreatePost
    CreatePost --> AddTag

    %% ------------------------------
    %% Profile Details
    %% ------------------------------
    MyInfo[個人資料]:::level3
    ManagePost[管理帖子]:::level3
    AccountSet[賬戶設置]:::level3
    SwitchAcc[切換賬戶]:::level3
    
    Profile --> MyInfo
    Profile --> ManagePost
    Profile --> AccountSet
    Profile --> SwitchAcc
```
