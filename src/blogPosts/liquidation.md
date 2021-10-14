---
title: "Introduction to liquidation"
date: "2021-10-14 12:00:00"
description: "Everything what you need to know about liquidation is here"
image: "/blog/liquidation/liquidation1.png"
---
![Liquidation post](/blog/liquidation/liquidation2.png "vetical")


**Hey folks!** 👋  
In this post we will introduce you to liquidation, how it works in our app, how to avoid it and how to calculate max debt.

🟢  **Okay, let’s get to the point!**  
When the value of a user's debt in USD exceeds the value of their collateral in USD, there is a risk of liquidation. 
This can happen due to a drop in the price of collateral tokens or an increase in debt.  
In a nutshell, this is how liquidation works.

🟢  **What happens then?**  
Liquidation deadline is set. If after a certain buffer time the user doesn't deposit collateral or burn synthetics, the account will be liquidated and part of the collateral taken.  
Important - when your position is going to be liquidated, your rewards for the current round will also be lost.  

In Synthetify, we do not liquidate your position immediately when the debt exceeds your collateral, we give you some time to avoid liquidation.
![Debt status](/blog/liquidation/debt_status.png "vetical")
On our app, you can track your liquidation threshold, in the panel being shown above.
The further from the right the bar is, the better - you're safe.
Likewise, the closer you are to the right edge, the closer you are to the liquidation.
If the bar exceeds the threshold, the liquidation process will begin, unless you deposit more collateral or burn some synthetics.



🟢  **How to calculate the maximum debt?**  
To do that, we will need a three values:
1. **Amount of collateral token**
2. **Price of collateral token**
3. **Collateral Ratio (const value, currently it is 0.3, for each collaterals)**
Let’s assume you have 100 $SNY tokens, and its price is 4,78$.
![Liqudation code](/blog/liquidation/liquidation_code.png "vetical")
In this way, we calculated the maximum possible debt, which is **143.4$**.  
If this value is exceeded, your position may be liquidated.  
Unless, you deposit some collateral or burn synthetics.  
Do you have additional questions?
Feel free to ask us on our Discord server or Twitter.

