public class Attempt01 {
    public static void main(String[] args) throws Exception {
        solve(100, 20, 10, 130); // Output/expected: 2
        // solve(788, 213, 238, 781); // Output/expected: 0
    }

    public static int solve(int n, int e, int o, int t) {
        // n = initial investment
        // e = first year/even year/year 0 interest
        // o = second year/odd year/year 1 interest
        // t = target

        

        int talley = 0;
        System.out.println("1 talley:" + talley + " n:" + n + " t:" + t);
        if (checkMethod(n, t)) {
            return talley;
        }
        while (n < t) {
            if (talley % 2 == 0) {
                n = n + (n * e / 100);
                System.out.println("2 talley:" + talley + " n:" + n + " t:" + t);
                if (checkMethod(n, t)) {
                    return talley;
                }
                talley++;
                System.out.println("3 talley:" + talley + " n:" + n + " t:" + t);
            }
            if (talley % 2 != 0) {
                n = n + (n * o / 100);
                System.out.println("4 talley:" + talley + " n:" + n + " t:" + t);
                if (checkMethod(n, t)) {
                    return talley;
                }
                talley++;
            }
        }
        System.out.println("5 talley:" + talley + " n:" + n + " t:" + t);
        return talley; // how to get rid of this?
    }

    public static boolean checkMethod(int nn, int tt) {
        System.out.println("nn: " + nn + " tt:" + tt);
        boolean status = false;
        if (nn > tt) {
            status = true;
        }
        return status;
    }
}