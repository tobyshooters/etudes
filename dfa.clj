;; Inspired by CS103 and 4clojure 164
;; by Cristobal Sciutto

;; Example DFA
(def example-dfa
  '{:states #{q0 q1 q2 q3}
    :alphabet #{a b c}
    :start q0
    :accepts #{q1 q2 q3}
    :transitions {q0 {a q1}
                  q1 {b q2}
                  q2 {c q3}}})

(defn next-state [{transitions :transitions} current letter]
  (-> transitions (get current) (get (symbol letter))))

(defn run-dfa 
  ;; return boolean if DFA can process a string
  ([dfa string] (run-dfa dfa (:start dfa) string))
  ([dfa current string]
   (if (empty? string)
     (contains? (:accepts dfa) current)
     (if-let [next (next-state dfa current (subs string 0 1))]
       (recur dfa next (subs string 1))
       false))))

(defn next-states [{transitions :transitions} state]
  (-> transitions (get state) vals set))

(defn next-letters [{transitions :transitions} state]
  (-> transitions (get state) keys (map str) set))

(defn current-strings [dfa current-state current-string new-letters]
  (if (contains? (:accepts dfa) current-state)
    (set (map #(str current-string %) new-letters))
    #{}))

(defn gen-all-strings 
  ;; given a DFA, recursively builds up all strings
  ([dfa] (gen-all-strings dfa (:start dfa) "" #{}))
  ([dfa current-state current-string strings]
   (let [letters (next-letters dfa current-state)
         states  (next-states dfa current-state)]
     (if (empty? letters)
       #{}
       (clojure.set/union 
         (current-strings dfa current-state current-string letters)
         (apply clojure.set/union (map (fn [state letter] 
                                         (gen-all-strings dfa state (str current-string letter) strings))
                                       states letters)))))))
