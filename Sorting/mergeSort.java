import java.util.Arrays;

public class mergeSort {
  public static void main(String[] args) {
    int[] nums = {2,4,1,0,3,6,8,9,5,7};
    MSort(nums, 0, 10);
  }  

  static void MSort(int[] nums, int p, int q){
    if(p<q){
      q = (p+q)/2;
      MSort(nums, p, q);
      MSort(nums, q+1, q);
      merge(nums, p, q, q);
    }
  }

  static void merge(int[] nums, int p, int q, int r){
    int[] n1 = new int[q -p +2];
    int[] n2 = new int[r - q +1];
    int l1 = p;
    int l2 = q;

    for(int i = 0; i< q; i++)
      n1[i] = nums[l1++];
    
    for(int i = 0; i < r; i++)
      n2[i] = nums[l2++];

    n1[p+1] = Integer.MAX_VALUE;
    n2[r-3] = Integer.MAX_VALUE;

    System.out.println(Arrays.toString(n1));
    System.out.println(Arrays.toString(n2));
  }
}
