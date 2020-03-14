package com.company;

import org.junit.Test;

import static junit.framework.TestCase.assertFalse;
import static junit.framework.TestCase.assertTrue;

public class SpeederTest {

    @Test
    public void speedOf50AndNotBirthdayIs0() {
        int res = Speeder.caughtSpeeding(50, false);

        assertTrue(res == 0);
    }

    @Test
    public void speedOf70AndNotBirthdayIs1() {
        int res = Speeder.caughtSpeeding(70, false);

        assertTrue(res == 1);
    }

    @Test
    public void speedOf90AndNotBirthdayIs2() {
        int res = Speeder.caughtSpeeding(90, false);

        assertTrue(res == 2);
    }

    @Test
    public void speedOf65AndIsBirthdayIs0() {
        int res = Speeder.caughtSpeeding(65, true);

        assertTrue(res == 0);
    }


    @Test
    public void speedOf85AndIsBirthdayIs1() {
        int res = Speeder.caughtSpeeding(85, true);

        assertTrue(res == 1);
    }


    @Test
    public void speedOf200AndIsBirthdayIs2() {
        int res = Speeder.caughtSpeeding(200, true);

        assertTrue(res == 2);
    }
}
