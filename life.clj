(ns life.core
  (:require [clojure.core.matrix :as mx]
            [clojure.core.matrix.operators :refer :all]
            [clojure.pprint :refer :all])
  (:gen-class))

(defn cycle-elems
  " Cycles the elements of a vector
  e.g. [1 2 3], 1 => [2 3 1]"
  [v dir]
  (let [n (count v)
        d (mod dir n)]
    (->> (cycle v) (drop d) (take n) vec)))

(def cycle-rows cycle-elems)

(defn cycle-cols [b dir]
  (map #(cycle-elems % dir) b)) 

(defn shifted-boards
  "Shifts the board in every direction in such a way that if all board were superposed, the element-wise sum of the matrices is the number of neighbors of a cell"
  [board]
  (let [up    (cycle-rows board  1)
        down  (cycle-rows board -1)]
    [(cycle-cols board 1)
     (cycle-cols board -1)
     (cycle-cols up 1)
     (cycle-cols up -1)
     (cycle-cols down 1)
     (cycle-cols down -1) up down]))

(defn pad
  "Pads a collection with a given padding"
  [coll padding]
  (concat (cons padding coll) [padding]))

(defn pad-board [b]
  (let [row-padding-size (+ 2 (count (first b)))
        row-padding (take row-padding-size (repeat 0))]
    (-> (map #(pad % 0) b)
        (pad row-padding))))

(defn unpad [coll]
  (take (- (count coll) 2) (drop 1 coll)))

(defn unpad-board [b]
    (-> (map unpad b) unpad))

(defn neighbors
  "Pads board, shifts in all directions, adds superpostions, and unpads.
  Padding is necessary to be able to use `cycle` for shifting."
  [board]
  (->> board pad-board shifted-boards (reduce +) unpad-board))

(defn check-state
  "Core rules of the Game of Life"
  [cell neighbors]
  (if (= cell 1)
    (cond 
      (< neighbors 2) 0
      (> neighbors 3) 0
      :else 1)
    (cond 
      (= neighbors 3) 1
      :else 0)))

(defn next-state [board]
  (mx/emap check-state board (neighbors board)))

(def glider
  [[0 1 0 0 0 0 0 0 0 0]
   [0 0 1 0 0 0 0 0 0 0]
   [1 1 1 0 0 0 0 0 0 0]
   [0 0 0 0 0 0 0 0 0 0]
   [0 0 0 0 0 0 0 0 0 0]
   [0 0 0 0 0 0 0 0 0 0]
   [0 0 0 0 0 0 0 0 0 0]
   [0 0 0 0 0 0 0 0 0 0]
   [0 0 0 0 0 0 0 0 0 0]
   [0 0 0 0 0 0 0 0 0 0]
   [0 0 0 0 0 0 0 0 0 0]])

(defn -main [& args]
  (pprint (take 20 (iterate next-state glider))))
