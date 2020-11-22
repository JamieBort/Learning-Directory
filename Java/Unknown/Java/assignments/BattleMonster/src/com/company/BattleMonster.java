package com.company;

public enum BattleMonster {


    //BATTLE_MONSTER(health, damageAmount, weakness, damageType);
    AQUA_DUDE(50, 6, ElementType.WATER, ElementType.LIGHTNING),
    IXIO(40, 10, ElementType.LIGHTNING, ElementType.WATER);

    private final int health;
    private final int damageAmount;
    private final ElementType weakness;
    private final ElementType damageType;

    BattleMonster(int health, int damageAmount, ElementType damageType, ElementType weakness) {
        this.health = health;
        this.damageAmount = damageAmount;
        this.damageType = damageType;
        this.weakness = weakness;
    }

    public static void main(String[] args) {
        BattleMonster first = BattleMonster.AQUA_DUDE;
        BattleMonster second = BattleMonster.IXIO;

        fightMonsters(first, second);
    }

    public static void fightMonsters (BattleMonster alpha, BattleMonster beta) {
        //If the damage type of one is the weakness of the other,
        // they are vulnerable and take 2x damage

        boolean betaVulnerable = alpha.damageType == beta.weakness;
        boolean alphaVulnerable = beta.damageType == alpha.weakness;
        int alphaDamageActual;
        int betaDamageActual;

        if (alpha.damageType == beta.weakness) {
            alphaDamageActual = alpha.damageAmount * 2;
        } else {
            alphaDamageActual = alpha.damageAmount;
        }

        if (beta.damageType == alpha.weakness) {
            betaDamageActual = beta.damageAmount * 2;
        } else {
            betaDamageActual = beta.damageAmount;
        }

        //We have to create temporary variables because we can't modify health (it's final)
        int betaHealth = beta.health;
        int alphaHealth = alpha.health;
        while (true) {
            System.out.println(alpha + " attacks first doing " + alphaDamageActual);
            betaHealth -= alphaDamageActual;
            if (betaVulnerable) {
                System.out.println("It's super effective!");
            }
            if (betaHealth <= 0) {
                System.out.println(alpha + " wins!");
                break;
            }

            System.out.println(beta + " attacks next doing " + betaDamageActual);
            alphaHealth -= betaDamageActual;
            if (alphaVulnerable) {
                System.out.println("It's super effective!");
            }
            if (alphaHealth <= 0) {
                System.out.println(beta + " wins!");
                break;
            }
        }
    }
}
enum ElementType {
    FIRE, ICE, LIGHTNING, WATER, EARTH, AIR, PHYSICAL
}
