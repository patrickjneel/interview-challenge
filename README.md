Pat Neel's AdCellerant challenge 
------------------------------------

Hello!

Here is my submission. I really enjoyed working on this challenge and am proud of what I put together. The charts are not dynamically responsiveness. If you shrink down the screen, and then refresh they will be sized for a mobile screen. I used the charting library Highcharts, and for some reason the responsive pie chart takes on a different apperance at a smaller screen size. I started refactoring using my DataCleaner function, and had a few more things to get to, but didn't have quite enough time. I have two eslint errors "Each child in an array or iterator should have a unique "key" prop." I tried taking in the index, and using Date.now(). Since I was returning a new ```<tr>``` every child had the same id and did not like that. Let me know if you need anything else at patrickj.neel@gmail.com. Thanks again!

Instructions For Running
------------------------
1. Clone repository

2. Install the dependencies

    ```npm install```

3. Start the application

    ```npm run dev```

4. Run Test suite
    
    ```npm run test-client```

5. Run linter
  
    ```npm run client-eslint```

