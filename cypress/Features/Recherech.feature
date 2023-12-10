Feature: Recherhe
    Scenario: Recherche 
        Given navigate to foncia
        When Search apprtement
        Then verification of search page for apprtement in 'PARIS'
