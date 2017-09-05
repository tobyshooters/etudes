(defn bounded-naturals [n] 
  (->> n (+ 1) (range 2) (take n)))

(defn is-multiple? [p n]
  (not (= 0 (mod n p))))

(defn keep-number? [p n]
  (if (not= n p) 
    (is-multiple? p n)
    true))

(defn cross-out-multiples [p nums]
  (filter (partial keep-number? p) nums))

(defn next-prime [prev nums]
  (let [greater-than-prev (filter #(> % prev) nums)]
    (if (empty? greater-than-prev)
      nil
      (apply min greater-than-prev))))

(defn sieve 
  ([nums] (sieve 2 nums))
  ([p nums] (if p 
              (recur (next-prime p nums) (cross-out-multiples p nums))
              nums)))

(defn primes [n] 
  (sieve (bounded-naturals n)))
