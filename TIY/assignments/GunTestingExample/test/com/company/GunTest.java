package com.company;

        import org.junit.Test;

        import static junit.framework.Assert.fail;
        import static junit.framework.TestCase.assertFalse;
        import static junit.framework.TestCase.assertTrue;

public class GunTest {
    @Test
    public void canCreateNewGun() {
        // arrange
        Gun gun = new Gun(); // at the time, IJ complained because the gun class doesn't exist

        // act


        // assert

    }

    @Test
    public void gunCanShoot() {
        // arrange
        Gun gun = new Gun();
        gun.load();


        // act
        gun.shoot();
        int bulletsRemaining = gun.countBullets();

        // assert
        assertTrue("Number of bullets should be 5 after firing a gun", bulletsRemaining == 5);
    }

    @Test
    public void unloaded10shooterHas0Bullets() {
        // arrange
        Gun gun = new Gun(10);

        // act

        // assert
        assertFail("unloaded 10shooter has 0 bullets", gun.countBullets() == 0);
    }


    @Test
    public void newGunIsNotLoaded(){
        // arrange
        Gun gun = new Gun();

        // assert
        assertFalse("New gun should not be loaded", gun.isLoaded());
    }

    @Test
    public void loadingGunResultsInLoadedGun() {
        // arrange
        Gun gun = new Gun();

        // act
        gun.load();

        // assert
        assertTrue("A loaded gun is loaded", gun.isLoaded());
    }

    @Test
    public void unloadedGunDoesNotShoot() {
        // arrange
        Gun gun = new Gun();

        // act
        boolean didShoot = gun.shoot();

        // assert
        assertFalse("Unloaded gun should NOT shoot", didShoot);
    }

    @Test
    public void loadedGunDoesShoot() {
        // arrange
        Gun gun = new Gun();
        gun.load();

        // act
        boolean didShoot = gun.shoot();

        // assert
        assertTrue("loaded gun should shoot", didShoot);
    }

    @Test
    public void sixShooterCanOnlyShootSixTimesWhenLoaded() {
        // arrange
        Gun sixShooter = new Gun(6);
        sixShooter.load();

        // act - shoot 7 times
        boolean shot1 = sixShooter.shoot();
        boolean shot2 = sixShooter.shoot();
        boolean shot3 = sixShooter.shoot();
        boolean shot4 = sixShooter.shoot();
        boolean shot5 = sixShooter.shoot();
        boolean shot6 = sixShooter.shoot();
        boolean shot7 = sixShooter.shoot();


        // assert
        assertTrue("Shot1 should be true", shot1);
        assertTrue("Shot2 should be true", shot2);
        assertTrue("Shot3 should be true", shot3);
        assertTrue("Shot4 should be true", shot4);
        assertTrue("Shot5 should be true", shot5);
        assertTrue("Shot6 should be true", shot6);
        assertFalse("Shot7 should be false", shot7);
    }

    @Test(expected = NoBulletsException.class)
    public void shootingUnloadedGunThrowsNoBulletException(){
        //arrange
        Gun gun = new Gun();

        //act
        gun.shoot();


        //assert

    }


}