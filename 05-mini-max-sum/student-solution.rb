# Given five positive integers, find the minimum and maximum values that can be
# calculated by summing exactly four of the five integers. Then print the
# respective minimum and maximum values as a single line of two space-separated
# integers.

# depends on knowing the array will only ever be of size 5
def minmax(arr)
  sorted = array.sort!(arr)
  min = sorted.slice(0, 4).sum
  max = sorted.slice(1, 5).sum
  "#{min} #{max}"
end

# works for an array of any length
def minmax(arr)
  sorted = array.sort!(arr)
  min = sorted.slice(0, arr.length - 1).sum
  max = sorted.slice(1, arr.length).sum
  "#{min} #{max}"
end
