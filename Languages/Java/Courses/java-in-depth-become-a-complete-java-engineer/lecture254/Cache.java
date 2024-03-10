package com.semanticsquare.nestedclasses;

interface CacheIterator {
    boolean hasNext();
    Bookmark next();
}

public class Cache {		
	private Bookmark[] items;	
	private int next = 0;
	
	public Cache(int size) { 
    	items = new Bookmark[size]; 
    }
    
    public void add(Bookmark item) {
	    if(next < items.length)
            items[next++] = item;
    }
    
    public CacheIterator iterator() {
    	return new MyCacheIterator();    	
    }
    
    private class MyCacheIterator implements CacheIterator {
    	private int i = 0;
    	
		@Override
		public boolean hasNext() {
			// TODO Auto-generated method stub
			return i < items.length;
		}

		@Override
		public Bookmark next() {
			// TODO Auto-generated method stub
			return items[i++];
		}
    	
    }
    
    public static void main(String[] args) {
		Cache recommendedItems = new Cache(5);
		
		Bookmark item1 = new Bookmark();
		item1.setId(2000);
		item1.setTitle("Use Final Liberally");
				
		Bookmark item2 = new Bookmark();
		item2.setId(2001);
		item2.setTitle("How do I import a pre-existing Java project into Eclipse and get up and running?");
				
		Bookmark item3 = new Bookmark();
		item3.setId(2002);
		item3.setTitle("Interface vs Abstract Class");
				
		Bookmark item4 = new Bookmark();
		item4.setId(2003);
		item4.setTitle("NIO tutorial by Greg Travis");
				
		Bookmark item5 = new Bookmark();
		item5.setId(2004);
		item5.setTitle("Virtual Hosting and Tomcat");
				
		recommendedItems.add(item1);
		recommendedItems.add(item2);
		recommendedItems.add(item3);
		recommendedItems.add(item4);
		recommendedItems.add(item5);
		
		CacheIterator iterator = recommendedItems.iterator();
		//CacheIterator iterator = recommendedItems.new MyCacheIterator();
		
		while (iterator.hasNext()) {
			System.out.println(iterator.next().getTitle());
		}	

	}
    
}
