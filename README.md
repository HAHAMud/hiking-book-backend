## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

我們深深熱愛攀登高山，享受著每一步踏上壯麗世界的喜悅。這個爬山專案是為台灣的登山愛好者而設計的，希望能為他們提供一個探索自然之美的機會，同時支援並引導他們實現攀登夢想。我們堅定地相信，透過一步一個腳印，我們能創造出令人難忘的登山體驗，同時與台灣的登山社群共同成長。

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# create migration
$ yarn typeorm:create-migration --name=<TABLE_NAME>

# run migration
$ yarn typeorm:run-migrations

# update migration
$ yarn typeorm:generate-migration

# revert migration
$ yarn typeorm:revert-migration
```

## 我們的願景

| 功能   | 功能描述                                                                                                                         | 備註 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| 登入   | 使用者可以建立帳戶，並登入                                                                                              |      |
| 山峰資訊 | 提供各種台灣山峰的資訊，包括名稱、海拔高度、位置、難度等級等                                           |      |
| 行程規劃 |  使用者可以建立自己的登山行程，選擇欲攀登的山峰及行程日期。系統可以根據使用者提供的資訊生成行程規劃，並顯示預計所需時間和推薦路線 |      |
| 裝備清單 | 使用者可以建立登山裝備清單，列出所需的裝備和用品。系統可以提供常見的登山裝備建議，並允許使用者自訂和編輯清單 |      |
| 天氣預報 | 系統可以整合天氣預報服務，為使用者提供目標山峰的天氣狀況和預測，以協助他們做出更明智的決策 |      |
| 社群分享 | 應用程式可以提供使用者社群功能，讓使用者之間進行交流、分享經驗和建議。使用者可以發布登山照片、行程日誌，並提問或回答其他使用者的問題 |      |
| 安全提醒 | 應用程式可以提供安全提示和警示，包括登山風險、氣象警報、路線危險等資訊，以協助使用者做出安全的決策並減少風險 |      |

