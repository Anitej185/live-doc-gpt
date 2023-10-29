(ns data-generator.core
  (:require [malli.core :as m]))

(def non-empty-string
  (m/schema [:string {:min 1}]))

(defn -main [& args]
  ((m/schema? non-empty-string))
  )
