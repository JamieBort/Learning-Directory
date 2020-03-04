class StudentTest {
    
	public static void main(String[] args) {
	    int[] studentIds = new int[] {1001, 1002, 1003};
	
	    // Creating first student object and setting its state
	    Student student1 = new Student(studentIds[0], "joan");
		student1.gender = "male";
		
		// Creating second student object and setting its state
		Student student2 = new Student(studentIds[1], "raj");
		student2.gender = "male";
		
		// Creating third student object and setting its state
		Student student3 = new Student(studentIds[2], "anita");
		student3.gender = "female";
		
		// Print each students name
		System.out.println("Name of student1: " + student1.name);
		System.out.println("Name of student2: " + student2.name);
		System.out.println("Name of student3: " + student3.name);
		
		// Update student1's name from joan to john by invoking updateProfile method
		student1.updateProfile("john");
		System.out.println("Updated name of student1: " + student1.name);
	}
}