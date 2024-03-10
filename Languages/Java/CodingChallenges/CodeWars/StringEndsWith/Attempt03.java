public class Attempt01 {
    public static void main(String[] args) throws Exception {
        // solution("abc", "e");
        // solution("abc", "c");
        // solution("abc", "abc");
        solution("sumo", "omo");
    }

    // "abc" "c"
    static boolean solution(String str, String ending) {
        boolean status = false;
        char[] first = str.toCharArray();
        char[] second = ending.toCharArray();
    
        if(ending.equals("")){
          return true;
        }
    
        if (ending.length() <= str.length()) {
            for (int i = 0; i < second.length; i++) {
                if (second[second.length - i -1] != first[first.length - i -1]) {
                    status = false;
                    break;
                } else { status = true;}
            }

        }
        System.out.println(status);
        return status;
    }
}