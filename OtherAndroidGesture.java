import java.util.List;
import java.util.ArrayList;

//Android gesture
//计算可能的 Android 解锁图案的个数
public class OtherAndroidGesture {
	static List<String> result=new ArrayList();
	public static void main(String[] args) {
		for(int i=4;i<10;i++){
			char[] num=new char[i];
			NMperm(9,i,0,num);
		}
		System.out.println(result.size());
//		for(int i=0,length=result.size();i<length;i++)
//			System.out.println(result.get(i));
	}
	static boolean isValidHelper(char i,int count, char[] num){
		for(int index=0;index<count;index++){
			if(num[index]==i)
				return true;
		}
		return false;
	}
	static boolean isValid(int count, char[] num)  
	{   
	    for(int i=0;i<count;i++)   
	    {   
	        if(num[i]==num[count])   
	            return false;   
	    }   
	    if(count>0){
	    	switch(num[count]){
	    	case '1':
	    		if((num[count-1]=='3'&&isValidHelper('2',count-1,num)==false)||
	    			(num[count-1]=='7'&&isValidHelper('4',count-1,num)==false)||
	    			(num[count-1]=='9'&&isValidHelper('5',count-1,num)==false)){
	    			return false;
	    		}
	    		break;
	    	case '2':
	    		if(num[count-1]=='8'&&isValidHelper('5',count-1,num)==false)
	    			return false;
	    		break;
	    	case '3':
	    		if((num[count-1]=='1'&&isValidHelper('2',count-1,num)==false)||
	    			(num[count-1]=='9'&&isValidHelper('6',count-1,num)==false)||
	    			(num[count-1]=='7'&&isValidHelper('5',count-1,num)==false))
	    			return false;
	    		break;
	    	case '4':
	    		if(num[count-1]=='6'&&isValidHelper('5',count-1,num)==false)
	    			return false;
	    		break;
	    	case '6':
	    		if(num[count-1]=='4'&&isValidHelper('5',count-1,num)==false)
	    			return false;
	    		break;
	    	case '7':
	    		if((num[count-1]=='1'&&isValidHelper('4',count-1,num)==false)||
	    			(num[count-1]=='9'&&isValidHelper('8',count-1,num)==false)||
	    			(num[count-1]=='3'&&isValidHelper('5',count-1,num)==false))
	    			return false;
	    		break;
	    	case '8':
	    		if(num[count-1]=='2'&&isValidHelper('5',count-1,num)==false)
	    			return false;
	    		break;
	    	case '9':
	    		if((num[count-1]=='3'&&isValidHelper('6',count-1,num)==false)||
	    			(num[count-1]=='7'&&isValidHelper('8',count-1,num)==false)||
	    			(num[count-1]=='1'&&isValidHelper('5',count-1,num)==false))
	    			return false;
	    		break;
	    	}
	    }
	    return  true;   
	}   
	//n中取m个的排列，第count次选数
	public static void NMperm(int n, int m, int count, char[] num) {
		if(count==m){   
	        result.add(new String(num));  
	        return;   
	    }   
	    for(int i=0;i<n;++i)//如果没选够,选择一个数，合理后递归调用 
	    {   
	        num[count]=(char)('1'+i);
	        if(isValid(count,num))   
	            NMperm(n,m,count+1,num);   
	    }   
	}

}
