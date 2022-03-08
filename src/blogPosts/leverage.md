---
title: 'Introducing leverage'
date: '2022-03-08 12:00:00'
description: 'We would like to introduce to you a new feature - the leverage!'
image: '/blog/leverage/1.png'
---

![Leverage](/blog/leverage/2.png 'horizontal')

We would like to introduce to you a new feature - the leverage!  
**This tool can work wonders in good hands 🔥**

So far you have been able to access leverage using the [Borrowing](https://synthetify.io/blog/borrowing), the new page will make it much quicker and more convenient.
As a result, Synthetify is a complete platform, integrating all significant functions in one place.

## What is leverage?

Leverage allows you to operate with a sum higher than your actually possess - driving great profits, but you have to be also aware of potential risks.

Under the hood, the Leverage allows you to borrow tokens.  
**For example** - you are in possession of 10 SOL, in case you use the Leverage 2x you can open positions up to the amount of 20 SOL, doubling your gains.  
Beware that the use of Leverage also comes with the risk of liquidation.
Liquidation is the mechanism of the automatic position closure, in case the debt value exceeds the collateral.

## What is Long and Short?

To open a position, you have to either choose the Short or Long position.  
Short is chosen when the prediction of the bid is a value loss of a selected token.  
Long is chosen in case of a contrary scenario - the prediction of token’s value gain.

## Opening and closing the position

1. To start you need to choose the collateral token, and token you want to leverage.

2. The next step is choosing your trading strategy - you have 2 options; Long and Short.

![Opening the position](/blog/leverage/open.gif 'horizontal')

3. Now, you need to choose the leverage level (in most cases it will be between x1.2 and x3).

4. Finally, you can focus on observing your trades.  
   You can finalize the process, by clicking the Close button in the bottom window, whenever you wish to - meaning when you reach a satisfying level of profit.

![Close the position](/blog/leverage/close.gif 'horizontal')

## Liquidation

Earlier We wrote that using the leverage carries the risk of liquidation.  
Now We will explain to you two key values which help you to avoid of being liquidated:

- Liquidation price - represents the price at which the initial deposit you put in, is lost - not entirely; an 8% of the amount is substracted.  
  **The formula for the Liquidation price is as it follows:**  
  borrowed amount of USD (Leverage token)/Liquidation ratio\*primary deposit

- Liquidation ratio - is a constant value which compared to the Deposited amount/Current debt ratio defines the result of your bid; in case the Deposited amount/Current debt is higher than the Liquidation ratio, you can close your position and receive profits, on contrary if the Deposited amount/Current debt is lower than the Liquidation ratio, then once you close the position an amount of 8% is substrated from the initial deposit

![table with all positions](/blog/leverage/table.png 'horizontal')
