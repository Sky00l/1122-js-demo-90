# (30%) JavaScript 網頁設計 1N 期中上機考-2 -- 斷網考試

##### 2024-4-18 at E201

#### Note:

1. 請不要發揮同學愛，作弊雙方除了本次考試 0 分外，平常分數另扣 20 分，情節嚴重者會送校。
2. iClass 上請繳交 mid21_xx.md, mid21_xx.pdf，還有壓縮檔 mid21_xx.zip 3 個檔案
3. 請直接將答案寫在 mid21_xx.md 上，老師實作的圖片放在 mid21_htc.pdf 上，請依照老師所給的圖片來實作並標註
4. 跟期中考相關的檔案及目錄名稱有 xx 時，必須要改成學號後 2 碼，沒有修改時，會視違犯情況扣分。
5. 每一張圖片要有機房左側背景，圖片上要有你的學號(或後兩碼)，圖片標註要跟老師所標註的類似。違者會依情節扣分。
6. 請自評分數，將每一題的 ? 填入分數，沒有填者，不會批改，以 0 分計算。

##### Your (Name, ID): (?, ?)

##### Mid21 斷網題目 (30%)

- P1 (10%): ? 分
- P2 (10%): ? 分
- P3 (10%): ? 分

##### 總分: ? 分

## (10%) P1: Products Demo -- 透過 JavaScript 來建構

請從 p1_data_xx.js 中之 all_products_xx 陣列產生 8 筆產品資料放入 products_xx 中。第 1 筆之 id 是你學號最後一碼，由此往下找 8 筆，如果學號最後一碼是 0 則從 id=10 產品開始, 取得 10, 11, 12, 1, 2, 3, 4, 5，放入 products_xx 中。

記得，每一項產品名稱後面要顯示產品 id，如第 1 筆的 Albany Sectional (P7)，其中的 P7 就表示產品 id=7

![mid21-p1-1.png](mid21-p1-1.png)

#### Your Answer

##### => Chrome 顯示，如上圖

![mid21-p1-2.png](mid21-p1-2.png)

##### => js code

```
將 p1_xx.js code 放入此
```

---

## (10%) P2: DOM 應用 -- BMI 計算

BMI = (體重 / 身高^2)
體重以公斤計算，身高以公尺計算

```
BMI < 18.5         Underweight
18.5 <= BMI <= 24  Normal
BMI > 24           Overweight

```

##### => test for underweight BMI

weight: 50kg
height: 175 cm

![mid21-p2-1.png](mid21-p2-1.png)

##### => test for normal BMI

weight: 70kg
height: 175 cm

![mid21-p2-2.png](mid21-p2-2.png)

##### => test for overweight BMI

weight: 90kg
height: 175 cm

![mid21-p2-3.png](mid21-p2-3.png)

#### Your Answer

##### => test for lower BMI

![mid21-p1-4.png](mid21-p1-4.png)

##### => test for normal BMI

![mid21-p1-5.png](mid21-p1-5.png)

##### => test for higher BMI

![mid21-p1-6.png](mid21-p1-6.png)

---

#### (10%) P3: DOM 整合題

##### => 按下左邊 L1 按鈕，會顯現 淡江大戲選單，共 5 個

![mid21-p3-1.png](mid21-p3-1.png)

##### => 按下 淡江大戲 3 按鈕，會顯現淡江大戲 3 的圖片 (images/TKU3.png)

![mid21-p3-3.png](mid21-p3-2.png)

##### => 按下左邊 L2 按鈕，會將淡江大戲選單全部清除

![mid21-p3-3.png](mid21-p3-3.png)

#### Your Answer

##### => 按下左邊 L1 按鈕，會顯現 淡江大戲選單，共 5 個

![mid21-p3-4.png](mid21-p3-4.png)

##### => 按下 淡江大戲 3 按鈕，會顯現淡江大戲 3 的圖片 (images/TKU3.png)

![mid21-p3-5.png](mid21-p3-5.png)

##### => 按下左邊 L2 按鈕，會將淡江大戲選單全部清除

![mid21-p3-6.png](mid21-p3-6.png)
