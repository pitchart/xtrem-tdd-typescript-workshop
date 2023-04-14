## Implement Portfolio

We need to bring a new business concept to our implementation: a `Portfolio`.

Basically, a `Portfolio` contains a **list of amounts in various currencies**. 

### contains list of amount in different currencies
```gherkin
Given an empty Portfolio
When I evaluate my portfolio in EUR
Then Portfolio amount is 0 EUR

Given an empty Portfolio
When I add 5 EUR
  And I evaluate my portfolio in EUR
Then Portfolio amount is 5 EUR

Given an empty Portfolio
When I add 5 EUR
  And I add 5 EUR
  And I evaluate my portfolio in EUR
Then Portfolio amount is 10 EUR
```

### we can evaluate the total amount of portfolio in a given currency
```gherkin
Background 
  Given a Bank
  And an exchange rate from EUR to USD of 1.2
  And an exchange rate from EUR to KRW of 1344
  And an exchange rate from USD to KRW of 1100
  
Given an empty Portfolio
When I add 5 USD
  And I add 10 EUR
  And I evaluate my portfolio in USD in the Bank
Then Portfolio amount is 17 USD

Given an empty Portfolio
When I add 1 USD
  And I add 1100 KRW
  And I evaluate my portfolio in KRW in the Bank
Then Portfolio amount is 2200 KRW

Given an empty Portfolio
When I add 5 USD
    And I add 10 EUR
    And I evaluate my portfolio in KRW in the Bank
Then Portfolio amount is 18940 KRW
```

###