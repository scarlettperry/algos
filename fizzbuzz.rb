def fizz_buzz(int)
  fizz_buzz_array = []

  (1..int).each do |i|

    if i % 3 == 0 && i % 5 == 0
      fizz_buzz_array << "FizzBuzz"
    elsif i % 3 == 0
      fizz_buzz_array << "Fizz"
    elsif i % 5 == 0
      fizz_buzz_array << "Buzz"
    else
      fizz_buzz_array << i.to_s
    end

  end

  fizz_buzz_array
end
