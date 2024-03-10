class Student {
    int id;
    String name;
    String gender;

    boolean updateProfile(String newName) {
        name = newName;
        return true;
    }
}