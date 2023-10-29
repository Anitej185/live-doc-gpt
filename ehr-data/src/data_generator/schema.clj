(require '[clojure.spec.alpha :as s])

(s/def ::name string?)
(s/def ::date_of_admission inst?)
(s/def ::medical_record_number int?)
(s/def ::attending_physician string?)
(s/def ::diagnosis string?)
(s/def ::treatment_plan string?)
(s/def ::progress_notes string?)

(s/def ::patient-data
  (s/keys
    :req [::name
          ::date_of_admission
          ::medical_record_number
          ::attending_physician
          ::diagnosis
          ::treatment_plan
          ::progress_notes]))

(def sample-data
  {
    ::name "Richard Allen",
    ::date_of_admission #inst "2023-12-01T00:00:00.000-00:00", ; Date in ISO format
    ::medical_record_number 321123, ; Integer value
    ::attending_physician "Dr. Moore",
    ::diagnosis "Common Cold",
    ::treatment_plan "Rest, fluids",
    ::progress_notes "Patient's symptoms are improving. Resting comfortably."
  })

(println (s/valid? ::patient-data sample-data)) 

