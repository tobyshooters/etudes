(defn is-multiple? [p n] 
  (= 0 (mod n p)))

(defn keep-number? [p n]
  (or (= n p)
      (not (is-multiple? p n))))

(defn cross-out-multiples [p nums]
  (filter (partial keep-number? p) nums))

(defn next-prime [prev nums]
  (some #(when (> % prev) %) nums))

(defn sieve 
  ([nums] (sieve 2 nums))
  ([p nums] (if p 
              (recur (next-prime p nums) (cross-out-multiples p nums))
              nums)))

(defn primes [n] 
  (sieve (range (+ n 1))))
