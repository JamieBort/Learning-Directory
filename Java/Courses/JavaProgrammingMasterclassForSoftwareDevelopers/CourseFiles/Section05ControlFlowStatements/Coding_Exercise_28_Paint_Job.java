// // Note, done. But a lot of redundant code. Could be cleaned up.

// package com.company;

// public class Main {

//     public static void main(String[] args) {
// //        getBucketCount(3.4, 2.1, 1.5, 2);
// //        getBucketCount(2.75, 3.25, 2.5, 1);
//         getBucketCount(3.4, 2.1, 1.5);
//     }

//     public static int getBucketCount(double width, double height, double areaPerBucket, double extraBuckets) {
//         System.out.println("Inside method with four parameters.");
//         if (width <= 0 || height <= 0 || areaPerBucket <= 0 || extraBuckets < 0) {
//             System.out.println("oops");
//             return -1;
//         } else {
//             System.out.println("The area that can be covered by one bucket of paint: " + areaPerBucket);
//             System.out.println("The number of extra buckets that Bob has at home: " + extraBuckets);
//             System.out.println("Calculated values.");
//             double requiredArea = width*height;
//             System.out.println("The area that needs to be covered based on the width and height: " + requiredArea);
//             double availableArea = extraBuckets*areaPerBucket;
//             System.out.println("The area that can be covered with what Bob has: " + availableArea);
//             if(requiredArea > availableArea){
//                 int neededBuckets = (int) Math.ceil((requiredArea-availableArea)/areaPerBucket);
//                 System.out.println("The number of buckets we need: " + neededBuckets);
//                 return neededBuckets;
//             } else{
//                 System.out.println("There are enough buckets.");
//                 return 0;
//             }
//         }
//     }


//     public static int getBucketCount(double width, double height, double areaPerBucket) {
//         System.out.println("Inside method with three parameters.");
//         double extraBuckets=0;
//         if (width <= 0 || height <= 0 || areaPerBucket <= 0 || extraBuckets < 0) {
//             System.out.println("oops");
//             return -1;
//         } else {
//             System.out.println("The area that can be covered by one bucket of paint: " + areaPerBucket);
//             System.out.println("The number of extra buckets that Bob has at home: " + extraBuckets);
//             System.out.println("Calculated values.");
//             double requiredArea = width*height;
//             System.out.println("The area that needs to be covered based on the width and height: " + requiredArea);
//             double availableArea = extraBuckets*areaPerBucket;
//             System.out.println("The area that can be covered with what Bob has: " + availableArea);
//             if(requiredArea > availableArea){
//                 int neededBuckets = (int) Math.ceil((requiredArea-availableArea)/areaPerBucket);
//                 System.out.println("The number of buckets we need: " + neededBuckets);
//                 return neededBuckets;
//             } else{
//                 System.out.println("There are enough buckets.");
//                 return 0;
//             }
//         }
//     }
// }



