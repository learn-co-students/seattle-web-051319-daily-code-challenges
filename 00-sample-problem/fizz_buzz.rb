def fizz_buzz(n)
  results = []
  n.times do |i|
    i = i + 1
    if i % 3 == 0 && i % 5 == 0
      results << "Fizz Buzz"
    elsif (i % 3 == 0)
      results << "Fizz"
    elsif (i % 5 == 0)
      results << "Buzz"
    else
      results << i
    end
  end
  results
end

puts fizz_buzz(17)
