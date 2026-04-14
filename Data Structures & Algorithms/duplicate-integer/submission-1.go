func hasDuplicate(nums []int) bool {
    var uniques = make(map[int]bool)

	for _ , num := range nums {
		if(uniques[num]){
			return true
		}
		uniques[num] = true
	}
	return false
}
