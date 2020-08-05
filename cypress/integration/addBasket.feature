Feature: add Basket
  
  @LADUMA-4653 @Sprint-1
  Scenario: Add Lillies to Basket
    Given I sign in to yougarden
    When I add the Lillies
        |  lilly  | 
        |  #formST0001 |
        |   #formST00062 |
    Then basket should have Lillies
        |   name                                              |
        |    Mixed Longiflorum Asiatic LA Hybrid Lilies      |
    Then i change delivery address



    

 