def square_digits(num)
  arr = num.to_s.split("")
  arr.map do |d|
    d.to_i * d.to_i
  end
end
